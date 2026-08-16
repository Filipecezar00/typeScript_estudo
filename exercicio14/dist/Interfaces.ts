export interface IItemCarrinho {
  id: string | number;
  nome: string;
  preco: number;
  quantidade: number;
}

export interface ICupomDesconto {
  codigo: string;
  porcentagem: number;
}
