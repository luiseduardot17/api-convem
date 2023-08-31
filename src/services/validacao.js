const MensagemModel = require('../models/mensagemModel');

function validarResposta(resposta) {
    const mensagemModel = new MensagemModel();
    try {
        if (resposta.toLowerCase() === "sim") {
            return mensagemModel.getMensagem();
        } else {
            throw new Error("Erro");
        }
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    validarResposta,
};