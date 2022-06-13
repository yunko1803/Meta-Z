import {TypeOrmModule} from '@nestjs/typeorm'
import * as entities from 'src/entities'

export const typeormModule = TypeOrmModule.forRoot({
  database: ':memory:',
  entities: Object.values(entities),
  logging: true,
  synchronize: true,
  type: 'sqlite',
})
