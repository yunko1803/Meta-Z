import 'reflect-metadata'
import {createApp} from 'src/app'
import * as entities from 'src/entities'
import {DataSource} from 'typeorm'
import {config} from './config'

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

const app = await createApp(dataSource)

await dataSource.initialize()

if (import.meta.env.PROD) {
  app.listen(config.port)
  console.log(`listening on http://localhost:${config.port}/`)
}

export const viteNodeApp = app
