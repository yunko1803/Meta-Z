/* eslint-disable import/no-named-as-default-member */
import dotenv from 'dotenv'

dotenv.config()

const {freeze} = Object

export const config = freeze({
  db: freeze({
    host : process.env.DB_HOST,
    username: process.env.DB_USERNAME ?? 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE ?? 'main',
    synchronize: process.env.NODE_ENV !== 'production'
  }),
  port: process.env.PORT,
})
