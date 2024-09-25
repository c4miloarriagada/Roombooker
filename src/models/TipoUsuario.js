import { db } from '../lib/db.js'
import { DataTypes } from 'sequelize'

const TipoUsuario = db.define(
  'tipo_usuario',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre_tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    timestamps: false
  }
)

export default TipoUsuario
