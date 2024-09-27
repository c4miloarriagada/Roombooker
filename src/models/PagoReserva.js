import { db } from '../lib/db.js'
import { DataTypes } from 'sequelize'
import Reserva  from './Reserva.js'


const PagoReserva = db.define(
  'pagoReserva',
  {
    id_pago_reserva: {
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
    id_reserva: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

PagoReserva.belongsTo(Reserva, {
  foreignKey: 'id_reserva',
  as: 'reserva'
}) 


export default PagoReserva
