import { Estudante } from "./estudante";
import { Funcionario } from "./funcionario";

console.log(`A contribuição de cada funcionario é ${Funcionario.contribuicao}`);

let funcionario1 = new Funcionario("Maria", 1234);
funcionario1.cumprimentar();
