import { db } from '../lib/db.js'
import User from '../models/User.js'
import Reserva from '../models/Reserva.js'
import TipoUsuario from '../models/TipoUsuario.js'
import DetalleReserva from '../models/DetalleReserva.js'
import Habitacion from '../models/Habitacion.js'
import TipoHabitacion from '../models/TipoHabitacion.js'
import PagoReserva from '../models/PagoReserva.js'
import ImagenHabitacion from '../models/ImagenHabitacion.js'


const initDatabase = async () => {
  try {
    await db.authenticate()

    await db.sync({
      alter: true
    })
    await createTiposUsuario()
    await createHabitaciones();
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error)
  } finally {
    await db.close()
  }
}

export default initDatabase

async function createTiposUsuario() {
  try {
    const roles = [
      'administrador',
      'cliente',
      'recepcionista',
      'camarista',
      'mantenimiento'
    ]

    for (const role of roles) {
      const roleExists = await TipoUsuario.findOne({
        where: { nombre_tipo: role }
      })

      if (!roleExists) {
        await TipoUsuario.create({ nombre_tipo: role })
      }
    }

    console.log('Tipos de usuario creados correctamente')
  } catch (error) {
    console.error('Error al crear los tipos de usuario:', error)
  }
}

async function createHabitaciones() {
  try {
    await TipoHabitacion.findOrCreate({where: {id_tipo_habitacion: 1, descripcion_tipo_habitacion: "Habitación Doble Deluxe", precio: 50000}});
    await TipoHabitacion.findOrCreate({where: {id_tipo_habitacion: 2, descripcion_tipo_habitacion: "Habitación Doble Estándar", precio: 40000}});
    await TipoHabitacion.findOrCreate({where: {id_tipo_habitacion: 3, descripcion_tipo_habitacion: "Habitación Simple VIP", precio: 30000}});
    await TipoHabitacion.findOrCreate({where: {id_tipo_habitacion: 4, descripcion_tipo_habitacion: "Habitación Triple", precio: 60000}});
    
    await ImagenHabitacion.findOrCreate({where: {id_imagen: 1, id_tipo_habitacion: 1, imagen: "imagen1.jpg"}});
    await ImagenHabitacion.findOrCreate({where: {id_imagen: 2, id_tipo_habitacion: 1, imagen: "imagen2.jpg"}});

    await ImagenHabitacion.findOrCreate({where: {id_imagen: 3, id_tipo_habitacion: 2, imagen: "imagen1.jpg"}});
    await ImagenHabitacion.findOrCreate({where: {id_imagen: 4, id_tipo_habitacion: 2, imagen: "imagen2.jpg"}});

    await ImagenHabitacion.findOrCreate({where: {id_imagen: 5, id_tipo_habitacion: 3, imagen: "imagen1.jpg"}});
    await ImagenHabitacion.findOrCreate({where: {id_imagen: 6, id_tipo_habitacion: 3, imagen: "imagen2.jpg"}});

    await ImagenHabitacion.findOrCreate({where: {id_imagen: 7, id_tipo_habitacion: 4, imagen: "imagen1.jpg"}});
    await ImagenHabitacion.findOrCreate({where: {id_imagen: 8, id_tipo_habitacion: 4, imagen: "imagen2.jpg"}});

    var id_habitacion = 1;
    var cant_habitaciones_tipo_1 = 1;
    var cant_habitaciones_tipo_2 = 1;
    var cant_habitaciones_tipo_3 = 1;
    var cant_habitaciones_tipo_4 = 1;

    for(var x = 0; x < cant_habitaciones_tipo_1; x++) {
      await Habitacion.findOrCreate({where: {id_habitacion: id_habitacion , id_tipo_habitacion: 1}});
      id_habitacion++;
    }

    for(var x = 0; x < cant_habitaciones_tipo_2; x++) {
      await Habitacion.findOrCreate({where: {id_habitacion: id_habitacion, id_tipo_habitacion: 2}});
      id_habitacion++;
    } 

    for(var x = 0; x < cant_habitaciones_tipo_3; x++) {
      await Habitacion.findOrCreate({where: {id_habitacion: id_habitacion, id_tipo_habitacion: 3}});
      id_habitacion++;
    } 

    for(var x = 0; x < cant_habitaciones_tipo_4; x++) {
      await Habitacion.findOrCreate({where: {id_habitacion: id_habitacion, id_tipo_habitacion: 4}});
      id_habitacion++;
    } 
    console.log('Habitaciones creadas correctamente')
  } catch (error) {
    console.error('Error al crear las habitaciones:', error)
  }
}