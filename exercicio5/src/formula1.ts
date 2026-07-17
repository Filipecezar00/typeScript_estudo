const voltas: readonly number[] = [84.5, 82.3, 85.2];

interface Calcular {
  (tempos: readonly number[]): number;
}

function calcularVoltas(calcular: Calcular) {
  const calculo = calcular(voltas);
  console.log(`O resultado do cálculo foi:${calculo}`);
}
const somarTudo: Calcular = (tempos) => {
  return tempos.reduce((total, atual) => total + atual, 0);
};

calcularVoltas(somarTudo);
