import 'reflect-metadata'
import {createApp} from 'src/app'
import {config} from './config'

const {app, dataSource} = createApp()

await dataSource.initialize()

if (import.meta.env.PROD) {
  app.listen(config.port)
  console.log(`listening on http://localhost:${config.port}/`)
}

export const viteNodeApp = app
