import Habitacion from '@/models/Habitacion'
import ImagenHabitacion from '@/models/ImagenHabitacion'
import TipoHabitacion from '@/models/TipoHabitacion'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { descripcion_tipo_habitacion, precio, urls } = await req.json()

    const maxIdResult = await TipoHabitacion.max('id_tipo_habitacion')
    const maxIdHab = await Habitacion.max('id_habitacion')
    const maxIdImg = await ImagenHabitacion.max('id_imagen')

    const nextTipoHabId = maxIdResult ? maxIdResult + 1 : 1
    let nextImgId = maxIdImg ? maxIdImg + 1 : 1

    let nextHabId = maxIdHab ? maxIdHab + 1 : 1

    const tipoHab = await TipoHabitacion.create({
      id_tipo_habitacion: nextTipoHabId,
      descripcion_tipo_habitacion,
      precio
    })

    await Promise.all(
      urls.map((imagen) => {
        return ImagenHabitacion.create({
          id_imagen: nextImgId++,
          id_tipo_habitacion: tipoHab.id_tipo_habitacion,
          imagen
        })
      })
    )

    const existingHabitacion = await Habitacion.findOne({
      where: { id_habitacion: tipoHab.id_tipo_habitacion }
    })

    if (existingHabitacion) {
      return NextResponse.json(
        {
          error: `El ID de habitación ${tipoHab.id_tipo_habitacion} ya existe.`
        },
        { status: 400 }
      )
    }

    await Habitacion.create({
      id_habitacion: maxIdImg,
      id_tipo_habitacion: tipoHab.id_tipo_habitacion
    })

    return NextResponse.json({
      status: 200,
      message: 'Tipo de habitación y habitaciones creadas exitosamente.'
    })
  } catch (error) {
    console.error('Error al crear el tipo de habitación:', error)
    return NextResponse.json(
      {
        error: 'Error al crear el tipo de habitación',
        details: error.message
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const tipoHabitaciones = await TipoHabitacion.findAll({ raw: true })

    return NextResponse.json(tipoHabitaciones, { status: 200 })
  } catch (error) {
    console.error('Error al obtener los datos combinados:', error)
    return NextResponse.json(
      {
        error: 'Error al obtener los datos combinados',
        details: error.message
      },
      { status: 500 }
    )
  }
}

export async function PUT(req) {
  try {
    const { id_tipo_habitacion, descripcion_tipo_habitacion, precio } =
      await req.json()

    if (!id_tipo_habitacion || !descripcion_tipo_habitacion || !precio) {
      return NextResponse.json(
        { error: 'Faltan datos para actualizar la habitación.' },
        { status: 400 }
      )
    }

    const habitacion = await TipoHabitacion.findByPk(id_tipo_habitacion)

    if (!habitacion) {
      return NextResponse.json(
        {
          error: `El tipo de habitación con ID ${id_tipo_habitacion} no existe.`
        },
        { status: 404 }
      )
    }

    habitacion.descripcion_tipo_habitacion = descripcion_tipo_habitacion
    habitacion.precio = precio

    await habitacion.save()

    return NextResponse.json(
      {
        message: `Tipo de habitación con ID ${id_tipo_habitacion} actualizado correctamente.`
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error al actualizar el tipo de habitación:', error)
    return NextResponse.json(
      {
        error: 'Error al actualizar el tipo de habitación.',
        details: error.message
      },
      { status: 500 }
    )
  }
}
