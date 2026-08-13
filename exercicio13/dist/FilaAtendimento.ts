import { Paciente } from "./Ipaciente";
import { NivelPrioridade } from "./NivelPrioridade";
export class FilaAtendimento {
  private pacientes: Paciente[] = [];

  public entrarNaFila(paciente: Paciente): void {
    this.pacientes.push(paciente);
  }
  public chamarProximo(): string {
    let indice: any;
    if (this.pacientes.length === 0) {
      return "Nenhum paciente aguardando!";
    }
    let urgente: any = this.pacientes.findIndex(
      (paciente: any) => paciente.prioridade === NivelPrioridade.URGENTE,
    );

    indice = urgente;

    if (indice === -1) {
      let preferencial: any = this.pacientes.findIndex(
        (paciente: any) => paciente.prioridade === NivelPrioridade.PREFERENCIAL,
      );
      indice = preferencial;
    }
    if (indice === -1) {
      indice = 0;
    }

    let paciente_atendido = this.pacientes.splice(indice, 1);
    let paciente = paciente_atendido[0];
    return paciente.nome;
  }
  public listarFila(): void {
    this.pacientes.forEach((paciente) => {
      console.log(
        `Paciente: ${paciente.nome} Nível de urgência: ${paciente.prioridade}`,
      );
    });
  }
}
