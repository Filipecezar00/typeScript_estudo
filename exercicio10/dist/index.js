"use strict";
class Notificacoes {
    destinatario;
    constructor(destinarario) {
        this.destinatario = destinarario;
    }
}
class NotificacaoEmail extends Notificacoes {
    assunto;
    constructor(assunto, destinatario) {
        super(destinatario);
        this.assunto = assunto;
    }
    enviar(mensagem) {
        console.log(`O email: ${this.assunto} foi enviado para o ${this.destinatario} com sucesso.`);
        return true;
    }
}
class NotificacaoSms extends Notificacoes {
    numeroTelefone;
    constructor(destinatario, numeroTelefone) {
        super(destinatario);
        this.numeroTelefone = numeroTelefone;
    }
    enviar(mensagem) {
        console.log(`SMS enviado com sucesso para o numero:${this.numeroTelefone} do destinatario : ${this.destinatario}`);
        return true;
    }
}
const email = new NotificacaoEmail("Bem-vindo à plataforma!", "dev@gmail.com");
const sms = new NotificacaoSms("Carlos Silva", "+5511999999999");
email.enviar("Sua conta foi criada com sucesso!");
sms.enviar("Seu código de verificação é 4582");
