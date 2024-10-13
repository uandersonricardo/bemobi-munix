import { Router } from 'express'

import { aiController } from '../controllers'

const aiRoutes = Router()

aiRoutes.get('/ask', async (req, res) => aiController.ask(req, res))

export default aiRoutes
