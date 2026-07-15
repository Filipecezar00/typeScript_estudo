interface Livro {
  titulo: string;
  ano: number;
}

const livro = <Livro>{};
livro.titulo = `Titulo do Livro`;
livro.ano = 1998;

let titulo: any = "Algum titulo";
let len = (titulo as string).length;
