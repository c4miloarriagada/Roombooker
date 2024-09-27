import { db } from '../lib/db.js'
import { DataTypes } from 'sequelize'
import TipoHabitacion  from './TipoHabitacion.js'


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
    }
  },
  {
    timestamps: false
  }
)

Habitacion.belongsTo(TipoHabitacion, {
  foreignKey: 'id_tipo_habitacion',
  as: 'tipoHabitacion'
}) 


export default Habitacion
