import { db } from '../lib/db.js'
import User from '../models/User.js'

const initDatabase = async () => {
  try {
    await db.authenticate()

    await db.sync({
      alter: true
    })
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error)
  } finally {
    await db.close()
  }
}

export default initDatabase
