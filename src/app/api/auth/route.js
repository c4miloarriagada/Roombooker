import User from '@/models/User'
import { NextResponse } from 'next/server'

export async function GET(req) {
  try {
    const sessionToken = req.cookies.get('sessionToken')?.value

    if (!sessionToken) {
      return NextResponse.json({
        authenticated: false,
        message: 'No hay token de sesión.'
      })
    }

    const user = await User.findOne({ where: { rut_usuario: sessionToken } })

    if (user) {
      return NextResponse.json({
        authenticated: true,
        user: {
          rut: user.rut_usuario,
          nombre: user.nombre_usuario,
          correo: user.correo
        }
      })
    }

    return NextResponse.json({
      authenticated: false,
      message: 'Token de sesión inválido.'
    })
  } catch (error) {
    console.error('Error al verificar la cookie:', error)
    return NextResponse.json(
      { authenticated: false, error: error.message },
      { status: 500 }
    )
  }
}
