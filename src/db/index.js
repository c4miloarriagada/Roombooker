import { db } from '../lib/db.js'
import User from '../models/User.js'
import Reserva from '../models/Reserva.js'
import TipoUsuario from '../models/TipoUsuario.js'
const initDatabase = async () => {
  try {
    await db.authenticate()

    await db.sync({
      alter: true
    })
    await createTiposUsuario()
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error)
  } finally {
    await db.close()
  }
}

export default initDatabase

async function createTiposUsuario() {
  try {
    const adminExists = await TipoUsuario.findOne({
      where: { nombre_tipo: 'administrador' }
    })
    if (!adminExists) {
      await TipoUsuario.create({ nombre_tipo: 'administrador' })
    }

    const clienteExists = await TipoUsuario.findOne({
      where: { nombre_tipo: 'cliente' }
    })
    if (!clienteExists) {
      await TipoUsuario.create({ nombre_tipo: 'cliente' })
    }

    console.log('Tipos de usuario creados correctamente')
  } catch (error) {
    console.error('Error al crear los tipos de usuario:', error)
  }
}
