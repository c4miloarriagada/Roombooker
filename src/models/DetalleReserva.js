import { db } from '../lib/db.js'
import { DataTypes } from 'sequelize'
import Reserva from './Reserva.js'
import Habitacion from './Habitacion.js'

const DetalleReserva = db.define(
  'detalleReserva',
  {
    id_detalle_reserva: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    id_reserva: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Reserva,
        key: 'id_reserva'
      }
    },
    id_habitacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Habitacion,
          key: 'id_habitacion'
        }
    },
    cantidad_personas: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comentarios: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fecha_detalle_reserva: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fecha_ingreso: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fecha_salida: {
        type: DataTypes.DATE,
        allowNull: false,
    },
  },
  {
    timestamps: false
  }
)

DetalleReserva.belongsTo(Habitacion, {
    foreignKey: 'id_habitacion',
    as: 'habitacion'
});


DetalleReserva.belongsTo(Reserva, {
    foreignKey: 'id_reserva',
    as: 'reserva'
});



export default DetalleReserva
