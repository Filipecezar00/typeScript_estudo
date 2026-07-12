"use strict";
var Direcao;
(function (Direcao) {
    Direcao[Direcao["Norte"] = 0] = "Norte";
    Direcao[Direcao["Leste"] = 1] = "Leste";
    Direcao[Direcao["Sul"] = 2] = "Sul";
    Direcao[Direcao["Oeste"] = 3] = "Oeste";
})(Direcao || (Direcao = {}));
let d = Direcao.Leste;
console.log(d);
let nomeD = Direcao[2];
console.log(nomeD);
