import { db } from '../lib/db.js'
import { DataTypes } from 'sequelize'

const TipoHabitacion = db.define(
  'tipoHabitacion',
  {
    id_tipo_habitacion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    descripcion_tipo_habitacion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tamanno_cama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cant_camas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cant_huespedes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

export default TipoHabitacion
