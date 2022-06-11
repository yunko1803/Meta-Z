/* eslint-disable import/no-named-as-default-member */
import express from 'express'
import {Context} from 'src/Context'
import {root, auth} from './apis'
import {DataSource} from 'typeorm'
import {config} from './config'
import * as entities from './entities'

export const createApp = () => {
  const app = express()

  const dataSource = new DataSource({
    type: 'mysql',
    host: config.db.host,
    port: 3306,
    username: config.db.username,
    password: config.db.password,
    database: config.db.database,
    entities: [entities.User],
    synchronize: config.db.synchronize,
  })

  const context: Context = {
    config,
    dataSource,
  }

  app.use(express.json())
  app.use('/', root(context))
  app.use('/auth', auth(context))

  return {
    app,
    dataSource,
  }
}

