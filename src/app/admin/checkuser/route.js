import User from '@/models/User'
import TipoUsuario from '@/models/TipoUsuario'
import { NextResponse } from 'next/server'

export async function GET(req) {
  try {
    const sessionToken = req.cookies.get('sessionToken')?.value

    if (!sessionToken) {
      return NextResponse.json(
        { isAdmin: false, message: 'No hay token de sesión.' },
        { status: 401 }
      )
    }

    const user = await User.findOne({
      where: { rut_usuario: sessionToken },
      include: {
        model: TipoUsuario,
        as: 'tipoUsuario',
        attributes: ['nombre_tipo']
      }
    })

    if (!user) {
      return NextResponse.json(
        { isAdmin: false, message: 'Usuario no encontrado.' },
        { status: 404 }
      )
    }

    if (user.tipoUsuario?.nombre_tipo === 'administrador') {
      return NextResponse.json({
        isAdmin: true,
        message: 'Usuario con permisos de administrador.'
      })
    }

    return NextResponse.json({
      isAdmin: false,
      message: 'Permisos insuficientes.'
    })
  } catch (error) {
    console.error('Error al verificar el rol del usuario:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor.', details: error.message },
      { status: 500 }
    )
  }
}
