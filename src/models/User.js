import { db } from '../lib/db.js'
import { DataTypes } from 'sequelize'

const User = db.define('user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
})

export default User
