import { NivelPrioridade } from "./NivelPrioridade";
export interface Paciente {
  nome: string;
  idade: number;
  prioridade: NivelPrioridade;
}
