export interface CupomDTO {
  readonly id: number;
  codigo: string;
  descontoPercentual: number;
  validade: Date | null;
}
