import {Router} from 'express'
import {ContextRoute} from 'src/Context'
import {User} from 'src/entities'

export const auth: ContextRoute = (context) => {
  const userRepository = context.dataSource.getRepository(User)
  const auth = Router()

  auth.get('/count', async (_, res) => {
    const count = await userRepository.count()
    res.send(String(count))
  })

  auth.post('/sign-in', (_, res) => {
    res.send('ok')
  })

  auth.post('/sign-up', (_, res) => {
    res.send('ok')
  })

  return auth
}

