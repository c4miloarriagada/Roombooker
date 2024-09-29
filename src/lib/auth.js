import TipoUsuario from '@/models/TipoUsuario'
import User from '@/models/User'

export async function getUserFromCookie(cookies) {
  try {
    const sessionToken = cookies.get('sessionToken')?.value
    console.log({ sessionToken })
    if (!sessionToken) {
      return null
    }

    const user = await User.findOne({ where: { rut_usuario: sessionToken } })

    if (user) {
      return {
        rut: user.rut_usuario,
        nombre: user.nombre_usuario,
        correo: user.correo
      }
    }

    return null
  } catch (error) {
    console.error('Error al obtener el usuario desde la cookie:', error)
    return null
  }
}

export async function isAdmin(cookies) {
  try {
    const sessionToken = cookies.get('sessionToken')?.value

    if (!sessionToken) {
      return false
    }

    const user = await User.findOne({
      where: { rut_usuario: sessionToken },
      include: {
        model: TipoUsuario,
        as: 'tipoUsuario',
        attributes: ['nombre_tipo']
      }
    })

    if (user && user.tipoUsuario?.nombre_tipo === 'administrador') {
      return true
    }

    return false
  } catch (error) {
    console.error('Error al verificar permisos de administrador:', error)
    return false
  }
}
