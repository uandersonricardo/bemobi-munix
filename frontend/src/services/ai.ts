import api from '@/config/api'

export const ask = async (q: string, company = 'tim') => {
  const response = await api.get<AskAIResponse>('/ai/ask', { params: { q, company } })
  return response.data
}
