const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const cors = require('cors');

app.use(cors());

app.use(express.json()); 

const mensagemController = require('../src/controllers/mensagemController');

app.get('/mensagem', mensagemController.getMensagem);

app.post('/mensagem', mensagemController.atualizarMensagem);

app.listen(port, () => {
  console.log(`Servidor está rodando na url: http://localhost:${port}/mensagem`);
});