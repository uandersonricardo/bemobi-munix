import { readFileFromDocs } from '../utils/file'

const contexts = ['neoenergia', 'tim', 'vivo', 'bemobi']

class RAG {
  public async search(company: string) {
    if (contexts.includes(company)) {
      return readFileFromDocs(`${company}.md`)
    }

    return ''
  }
}

export default RAG
