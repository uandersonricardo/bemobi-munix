# 📱 Hackathon Bemobi - Equipe MUNix

Este repositório contém as soluções desenvolvidas para o Hackathon Bemobi 2024 pela equipe MUNix: o Bemobi Connect e o Bemobi Assistant. Essas soluções foram criadas para aprimorar a experiência do usuário e facilitar a gestão de pagamentos recorrentes por meio de uma plataforma centralizada e com recursos inteligentes.

## 🔗 Bemobi Connect

O Bemobi Connect é uma plataforma que unifica todas as empresas que utilizam os serviços de pagamentos recorrentes da Bemobi, permitindo que os usuários visualizem, gerenciem e paguem suas assinaturas em um único local. A proposta é simplificar a vida do usuário e garantir transparência e controle sobre seus pagamentos de diferentes serviços.

## 🤖 Bemobi Assistant

O Bemobi Assistant é uma inteligência artificial que opera tanto dentro do Bemobi Connect quanto em soluções white-label oferecidas aos parceiros da Bemobi.
Essa IA acompanha toda a jornada de pagamento do usuário, fornecendo:

- Lembretes automáticos sobre vencimento de assinaturas.
- Suporte ao cliente em tempo real, resolvendo dúvidas comuns.
- Sugestões inteligentes de economia e controle financeiro.

O Bemobi Assistant é uma peça-chave para aumentar a eficiência dos serviços e melhorar a experiência do usuário.

## 📂 Estrutura do Projeto

O repositório é organizado nas seguintes pastas:

`/backend`: Implementação do servidor utilizando Node.js e Express.
`/frontend`: Interface desenvolvida com Vite, Vue.js e TailwindCSS.

## 🛠 Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter instalado na sua máquina:

- Node.js
- Yarn

### Passos para Executar

1. Clone o repositório:

```bash
git clone https://github.com/uandersonricardo/bemobi-munix
cd bemobi-munix
```

2. Instale as dependências para o backend e o frontend:

```bash
cd backend
yarn
cd ../frontend
yarn
```

3. Execute o servidor de desenvolvimento:

Para o backend:

```bash
cd backend
yarn dev
```

Para o frontend:

```bash
cd frontend
yarn dev
```

4. Acesse a aplicação:

- `Frontend`: A aplicação estará disponível em http://localhost:5173.
- `Backend`: A API estará disponível em http://localhost:3000.

## 🛡 Tecnologias Utilizadas

**Backend**:
- Node.js
- Express
- ChatGPT 4o-mini
- Retrieval Augmented Generation

**Frontend**:
- Vite
- Vue.js
- TailwindCSS
- Web Speech API

## 🎯 Objetivo do Projeto

Facilitar a vida dos usuários que usam serviços com pagamentos recorrentes, consolidando todas as informações em uma única plataforma. Além disso, o Bemobi Assistant atua como um suporte inteligente, simplificando a jornada do usuário com recursos automatizados e sugestões personalizadas.

## 👥 Equipe MUNix

- Marina Paixão
- Natalie Chaves
- Uanderson Ricardo
