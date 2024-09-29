import { db } from '../lib/db.js'
import { DataTypes } from 'sequelize'
import TipoHabitacion from './TipoHabitacion.js'

const ImagenHabitacion = db.define(
  'imagen_habitacion',
  {
    id_imagen: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_tipo_habitacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: TipoHabitacion,
        key: 'id_tipo_habitacion'
      }
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

export default ImagenHabitacion
