export const buildPrompt = (prompt: string, context: string) => {
  let template =
    'Use as informações de contexto para à solicitação do cliente no final. Se você não souber a resposta, apenas diga que não sabe e não tente inventar uma resposta.  '
  template += `---------------------`
  template += `${context}. `
  template += `---------------------`
  template += 'Responda em português e mantenha a resposta concisa. '
  template +=
    'A resposta deve ter um conteúdo da resposta que seja conciso e pareça um assistente virtual respondendo. Também pode ou não conter um botão de ação para aquela resposta. A ação deve vir acompanhada sempre de verbo.'
  template +=
    'Assuma que o chatbot tem acesso a ações diretas da plataforma, como baixar boletos, transferir planos, corrigir dados, etc. Evite mandar ele ir para outra plataforma para realizar a ação.'
  template +=
    'Ex: Se o cliente solicitou a segunda via de um boleto, a ação deve ser "Baixar boleto". Se o cliente perguntou sobre algum plano, então não precisa de ação. '
  template +=
    'Por favor, forneça sua resposta no formato de json. O json deve ter o formato { content: string; action: string | null }. '
  template += `Pergunta: ${prompt}. `
  template += 'Resposta Útil:'
  return template
}
