/* eslint-disable import/no-named-as-default-member */
import express from 'express'
import {Context} from 'src/Context'
import {root, auth} from './apis'
import {DataSource} from 'typeorm'
import {config} from './config'
import {User} from './entities'

export const createApp = async (dataSource: DataSource) => {
  const app = express()

  const context: Context = {
    config,
    dataSource,
  }

  app.use(express.json())
  app.use('/', root(context))
  app.use('/auth', auth({userRepository: context.dataSource.getRepository(User)}))

  return app
}

