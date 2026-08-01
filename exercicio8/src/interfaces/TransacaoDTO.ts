export interface TransacaoDTO {
  readonly id: number;
  descricao: string;
  valor: number;
  tipo: "DEPOSITO" | "SAQUE";
  data: Date;
}
