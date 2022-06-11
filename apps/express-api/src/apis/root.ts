import {Router} from 'express'
import {ContextRoute} from 'src/Context'

export const root: ContextRoute = () => {
  const root = Router()

  root.get('/', (_, res) => {
    res.send('ok')
  })

  root.get('/ip', async (req, res) => {
    const resp = await fetch('https://api.ipify.org?format=json')
    const json = await resp.json()
    res.json(json)
  })

  return root
}

