import User from '@/models/User'
import TipoUsuario from '@/models/TipoUsuario'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const users = await User.findAll({
      include: [
        {
          model: TipoUsuario,
          as: 'tipoUsuario',
          attributes: ['id', 'nombre_tipo']
        }
      ],
      attributes: { exclude: ['password'] }
    })

    return NextResponse.json(users, { status: 200 })
  } catch (error) {
    console.error('Error al obtener los usuarios:', error)
    return NextResponse.json(
      { error: 'Error al obtener los usuarios', details: error.message },
      { status: 500 }
    )
  }
}

export async function PUT(req) {
  try {
    const {
      rut_usuario,
      nombre_usuario,
      apellido_usuario,
      fecha_nacimiento,
      correo,
      id_tipo_usuario
    } = await req.json()

    if (!rut_usuario) {
      return NextResponse.json(
        { error: 'RUT de usuario es obligatorio para la actualización.' },
        { status: 400 }
      )
    }

    const user = await User.findOne({ where: { rut_usuario } })

    if (!user) {
      return NextResponse.json(
        { error: `El usuario con RUT ${rut_usuario} no existe.` },
        { status: 404 }
      )
    }

    user.nombre_usuario = nombre_usuario
    user.apellido_usuario = apellido_usuario
    user.fecha_nacimiento = new Date(fecha_nacimiento) // Convertir a objeto de fecha
    user.correo = correo
    user.id_tipo_usuario = id_tipo_usuario

    await user.save()

    return NextResponse.json(
      { message: `Usuario con RUT ${rut_usuario} actualizado correctamente.` },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error al actualizar el usuario:', error)
    return NextResponse.json(
      { error: 'Error al actualizar el usuario', details: error.message },
      { status: 500 }
    )
  }
}
