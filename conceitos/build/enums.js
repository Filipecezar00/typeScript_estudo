var Direcao;

(function (Direcao) {
  Direcao[(Direcao["Norte"] = 0)] = "Norte";
  Direcao[(Direcao["Leste"] = 1)] = "Leste";
  Direcao[(Direcao["Sul"] = 2)] = "Sul";
  Direcao[(Direcao["Oeste"] = 3)] = "Oeste";
});
Direcao || (Direcao = {});

var d = Direcao.Leste;
console.log(d);
