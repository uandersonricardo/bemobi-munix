import RAG from '../external/rag'
import LLM from '../external/llm'

class AIService {
  private readonly llm: LLM
  private readonly rag: RAG

  constructor(llm: LLM, rag: RAG) {
    this.llm = llm
    this.rag = rag
  }

  public async ask(prompt: string, company = 'bemobi') {
    const context = await this.rag.search(company)
    const { action, content } = await this.llm.ask(prompt, context)

    return { response: content, action }
  }
}

export default AIService
