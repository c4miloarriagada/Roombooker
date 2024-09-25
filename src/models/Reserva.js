import { db } from '../lib/db.js'
import { DataTypes } from 'sequelize'
import User from './User.js'

const Reserva = db.define(
  'reserva',
  {
    id_reserva: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    rut_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: User,
        key: 'rut_usuario'
      }
    },
    total_reserva: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

Reserva.belongsTo(User, {
  foreignKey: 'rut_usuario',
  as: 'usuario'
})

export default Reserva
