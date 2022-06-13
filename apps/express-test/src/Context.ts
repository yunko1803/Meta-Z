import {Router} from 'express-serve-static-core'
import {config} from 'src/config'
import {DataSource} from 'typeorm'

export interface Context {
  config: typeof config
  dataSource: DataSource
}

export type ContextRoute<Props> = (context: Props) => Router
