class MensagemModel {
    constructor() {
        this.mensagem = "Você está mais próximo de se juntar ao time!";
    }

    getMensagem() {
        return this.mensagem;
    }
}

module.exports = MensagemModel;