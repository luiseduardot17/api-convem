const MensagemModel = require('../models/mensagemModel');
const { validarResposta } = require('../services/validacao');

const mensagemModel = new MensagemModel();

function getMensagem(req, res) {
    const mensagem = mensagemModel.getMensagem();
    res.json({ mensagem });
  }

function atualizarMensagem(req, res) {
    const resposta = req.body.resposta;

    if (!resposta) {
        res.status(400).json({ erro: "A propriedade 'resposta' está ausente no corpo da solicitação." });
        return;
      }
    
    try {
        const mensagem = validarResposta(resposta);

        res.json({ mensagem });
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
}

module.exports = {
    getMensagem,
    atualizarMensagem,
};