import { db } from '../lib/db.js'
import { DataTypes } from 'sequelize'
import TipoHabitacion from './TipoHabitacion.js'

const Habitacion = db.define(
  'habitacion',
  {
    id_habitacion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    id_tipo_habitacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: TipoHabitacion,
        key: 'id_tipo_habitacion'
      }
    },
    disponible: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    timestamps: false
  }
)

export default Habitacion
