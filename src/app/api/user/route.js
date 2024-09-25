import TipoUsuario from '@/models/TipoUsuario'
import User from '@/models/User'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json()
    const tipoUsuario = await TipoUsuario.findOne({
      where: { nombre_tipo: 'cliente' }
    })

    const newUser = await User.create({
      rut_usuario: body.rut_usuario,
      nombre_usuario: body.nombre_usuario,
      apellido_usuario: body.apellido_usuario,
      fecha_nacimiento: body.fecha_nacimiento,
      correo: body.correo,
      id_tipo_usuario: tipoUsuario.id,
      password: body.password
    })

    return NextResponse.json({
      message: 'Usuario creado exitosamente',
      user: newUser
    })
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
