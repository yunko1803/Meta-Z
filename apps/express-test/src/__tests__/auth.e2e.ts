import express from 'express'
import request from 'supertest'
import {Express} from 'express-serve-static-core'
import {auth} from 'src/apis/auth'

describe('root routes', () => {
  let app: Express

  beforeEach(async () => {
    app = express()

    const userRepository: any = {
      count: jest.fn().mockResolvedValue(0)
    }

    app.use('/', auth({
      userRepository,
    }))
  })

  it('should request / (GET)', () => {
    return request(app)
    .get('/count')
    .expect(200)
    .expect('0')
  })
})
