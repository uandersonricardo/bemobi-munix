import { Request, Response } from 'express'

import AIService from '../services/ai-service'

class AIController {
  private readonly aiService: AIService

  constructor(aiService: AIService) {
    this.aiService = aiService
  }

  public async ask(req: Request, res: Response) {
    if (!req.query.q) {
      res.status(400).json({ message: "Missing 'q' parameter" })
      return
    }

    const result = await this.aiService.ask(req.query.q.toString(), req.query.company?.toString())

    res.status(200).json(result)
  }
}

export default AIController
