import User from '../../../models/User'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json()

    const user = await User.findOne({where: { correo: body.email }});

    if(user != null && user.password == body.password) {
      return NextResponse.json({
        message: "Usuario " + body.email + " exitosamente",
        logged: true,
        user: {
          rut: user.rut_usuario,
          nombre: user.nombre_usuario
        }
      })
    }

    return NextResponse.json({
      message: "Usuario o contraseña incorrectos.",
      logged: false
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
