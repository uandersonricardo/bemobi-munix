import { aiService } from '../services'
import AIController from './ai-controller'

export const aiController = new AIController(aiService)
