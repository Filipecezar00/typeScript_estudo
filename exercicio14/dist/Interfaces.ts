interface IItemCarrinho {
  id: string | number;
  nome: string;
  preco: number;
  quantidade: number;
}

interface ICupomDesconto {
  codigo: string;
  porcentagem: number;
}
