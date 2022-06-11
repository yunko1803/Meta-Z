import request from 'supertest'
import {createApp} from 'src/app'
import {Express} from 'express-serve-static-core'

describe('root routes', () => {
  let app: Express

  beforeEach(() => {
    app = createApp()
  })

  it('should request / (GET)', () => {
    return request(app)
      .get('/')
      .expect(200)
      .expect('ok')
  })
})
