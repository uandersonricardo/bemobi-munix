import OpenAI, { ClientOptions } from 'openai'
import extract from 'extract-json-from-string'

import { buildPrompt } from '../lib/prompt'

class LLM {
  private readonly api: OpenAI
  private readonly configuration: ClientOptions

  constructor() {
    this.configuration = {
      apiKey: process.env.OPENAI_API_KEY ?? ''
    }
    this.api = new OpenAI(this.configuration)
  }

  public async embedding(prompt: string) {
    const response = await this.api.embeddings.create({ input: prompt, model: 'text-embedding-3-small' })
    return response.data[0].embedding
  }

  public async ask(prompt: string, context: string) {
    const response = await this.api.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'Você é um assistente de IA gentil e prestativo que responde perguntas e fornece informações sobre um serviços, produtos e processos.'
        },
        { role: 'user', content: buildPrompt(prompt, context) }
      ],
      temperature: 0.8
    })

    const json = (extract(response.choices[0].message.content)?.[0] ?? {
      content: 'Não entendi, poderia me explicar melhor?',
      action: null
    }) as {
      content: string
      action: string | null
    }

    console.log(response.choices[0].message.content, json)

    return json
  }
}

export default LLM
