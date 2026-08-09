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
