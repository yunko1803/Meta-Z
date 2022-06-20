import {DataSource, DataSourceOptions} from 'typeorm'
import {CreateContext} from './types'

export type TypeormContext = DataSource

export type CreateTypeOrmContextOptions = DataSourceOptions

export const createTypeOrm: CreateContext<
  CreateTypeOrmContextOptions,
  TypeormContext
> = (options) => {
  const dataSource = new DataSource(options)
  let isInit = false
  return async () => {
    if (!isInit) {
      await dataSource.initialize()
      isInit = true
    }
    return dataSource
  }
}
