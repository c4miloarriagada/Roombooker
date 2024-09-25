import { db } from '../lib/db.js'
import { DataTypes } from 'sequelize'
import TipoUsuario from './TipoUsuario.js'

const User = db.define(
  'user',
  {
    rut_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    nombre_usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido_usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha_nacimiento: {
      type: DataTypes.DATE,
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    id_tipo_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: TipoUsuario,
        key: 'id'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

User.belongsTo(TipoUsuario, {
  foreignKey: 'id_tipo_usuario',
  as: 'tipoUsuario'
})

export default User
