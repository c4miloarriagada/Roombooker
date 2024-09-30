import Habitacion from '@/models/Habitacion'
import { NextResponse } from 'next/server'
import TipoHabitacion from '@/models/TipoHabitacion'
import ImagenHabitacion from '@/models/ImagenHabitacion'

export async function POST(req) {
  try {
    const body = await req.json()

    

    let habitaciones = await Habitacion.findAll()

    for (var x in habitaciones) {
      let habitacion = habitaciones[x]

      const tipoHabitacion = await TipoHabitacion.findOne({
        where: { id_tipo_habitacion: habitacion.id_tipo_habitacion }
      })
      const imagenes = await ImagenHabitacion.findAll({
        where: { id_tipo_habitacion: habitacion.id_tipo_habitacion }
      })

      habitaciones[x] = {
        id: habitacion.id_habitacion,
        tipo: tipoHabitacion.id_tipo_habitacion,
        descripcion: tipoHabitacion.descripcion_tipo_habitacion,
        tamanno_cama: tipoHabitacion.tamanno_cama,
        cant_camas: tipoHabitacion.cant_camas,
        cant_huespedes: tipoHabitacion.cant_huespedes,
        precio: tipoHabitacion.precio,
        imagenes: imagenes.map((imagen) => imagen.imagen)
      }
    }

    return NextResponse.json(habitaciones)
  } catch (error) {
    console.error('Error al crear el usuario:', error)
    return NextResponse.json(
      {
        error: 'Error al crear el usuario',
        details: error.message
      },
      { status: 500 }
    )
  }
}
