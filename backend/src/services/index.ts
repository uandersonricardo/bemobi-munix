import { llm, rag } from '../external'
import AIService from './ai-service'

export const aiService = new AIService(llm, rag)
