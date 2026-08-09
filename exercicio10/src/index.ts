abstract class Notificacoes {
  protected destinatario: string;
  constructor(destinarario: string) {
    this.destinatario = destinarario;
  }

  public abstract enviar(mensagem: string): boolean;
}

class NotificacaoEmail extends Notificacoes {
  private assunto: string;
  constructor(assunto: string, destinatario: string) {
    super(destinatario);
    this.assunto = assunto;
  }
  public enviar(mensagem: string): boolean {
    console.log(
      `O email: ${this.assunto} foi enviado para o ${this.destinatario} com sucesso.`,
    );
    return true;
  }
}

class NotificacaoSms extends Notificacoes {
  private numeroTelefone: string;
  constructor(destinatario: string, numeroTelefone: string) {
    super(destinatario);
    this.numeroTelefone = numeroTelefone;
  }
  public enviar(mensagem: string): boolean {
    console.log(
      `SMS enviado com sucesso para o numero:${this.numeroTelefone} do destinatario : ${this.destinatario}`,
    );
    return true;
  }
}

const email = new NotificacaoEmail("Bem-vindo à plataforma!", "dev@gmail.com");

const sms = new NotificacaoSms("Carlos Silva", "+5511999999999");

email.enviar("Sua conta foi criada com sucesso!");
sms.enviar("Seu código de verificação é 4582");
