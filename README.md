**API de Validação de Resposta** 🚀

Esta é uma API Node.js simples que fornece uma funcionalidade de validação de resposta. A API permite que o usuário envie uma resposta através de uma solicitação POST e, em seguida, valida a resposta. Se a resposta for "sim", a API retorna uma mensagem de sucesso. Caso contrário, ela retorna uma mensagem de erro.

✨ **Funcionalidades Principais**

- **POST /mensagem**: O usuário pode enviar uma resposta no corpo da solicitação POST. Se a resposta for "sim", a API retorna uma mensagem de sucesso. Se a resposta for diferente de "sim", a API retorna uma mensagem de erro. ✔️❌

- **GET /mensagem**: Esta rota permite ao usuário obter a mensagem atual armazenada na API. 📝

🛠️ **Tecnologias Utilizadas**

- Node.js: A API é desenvolvida usando o ambiente de tempo de execução JavaScript Node.js. 🚀

- Express.js: O framework Express.js é usado para gerenciar as rotas e o middleware da API. 🌐

- JSON: A API recebe e envia dados no formato JSON. 📦

📋 **Como Usar**

1. **Instalação**: Clone o repositório e execute `npm install` para instalar as dependências. 📥

2. **Iniciar o Servidor**: Execute `npm start` para iniciar o servidor. 🏁

3. **Fazer uma Solicitação POST**: Use ferramentas como Insomnia ou Postman para enviar uma solicitação POST para `/mensagem` com a resposta no corpo da solicitação.
exemplo:
`{
"resposta": "sim"
}`
Se a resposta for "sim", você receberá uma mensagem de sucesso; caso contrário, receberá uma mensagem de erro. 🚀📝❗️

4. **Obter a Mensagem Atual**: Faça uma solicitação GET para `/mensagem` para obter a mensagem atual armazenada na API. 📌