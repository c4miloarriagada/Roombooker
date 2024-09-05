import pg from 'pg'
import { Sequelize } from 'sequelize'

export const db = new Sequelize('postgres', 'admin', 'admin', {
  host: 'localhost',
  port: 5432,
  dialectModule: pg,
  dialect: 'postgres'
})
