"use strict";
var StatusSensor;
(function (StatusSensor) {
    StatusSensor["Ativo"] = "Ativo";
    StatusSensor["Inativo"] = "Inativo";
    StatusSensor["FalhaCritica"] = "FalhaCritica";
})(StatusSensor || (StatusSensor = {}));
const localizacao = [-23.5505, -46.6333];
function logarMensagem(mensagem) {
    console.log("LOG: " + mensagem);
}
function dispararAlarme(msg) {
    throw new Error(msg);
}
const sensorCaldeira = {
    id: 101,
    nome: "Sensor de temperatura - Caldeira Principal",
    status: StatusSensor.Ativo,
    ultimaLeitura: null,
};
logarMensagem(`Status inicial do ${sensorCaldeira.nome}: ${sensorCaldeira.status}`);
logarMensagem(`Leitura atual: ${sensorCaldeira.ultimaLeitura}`);
sensorCaldeira.ultimaLeitura = 85.3;
logarMensagem(`Nova leitura detectada: ${sensorCaldeira.ultimaLeitura}`);
if (sensorCaldeira.ultimaLeitura > 80) {
    sensorCaldeira.status = StatusSensor.FalhaCritica;
    logarMensagem(`ALERTA: Mudando status para ${sensorCaldeira.status}`);
}
