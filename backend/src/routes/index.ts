import { Router } from 'express'

import aiRoutes from './ai-routes'

const routes = Router()

routes.use('/ai', aiRoutes)

export default routes
