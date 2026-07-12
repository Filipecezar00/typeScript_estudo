enum StatusSensor {
  Ativo = "Ativo",
  Inativo = "Inativo",
  FalhaCritica = "FalhaCritica",
}

type Sensor = {
  id: number;
  nome: string;
  status: StatusSensor;
  ultimaLeitura: number | null;
};

const localizacao: [number, number] = [-23.5505, -46.6333];

function logarMensagem(mensagem: string): void {
  console.log("LOG: " + mensagem);
}

function dispararAlarme(msg: string): never {
  throw new Error(msg);
}

const sensorCaldeira: Sensor = {
  id: 101,
  nome: "Sensor de temperatura - Caldeira Principal",
  status: StatusSensor.Ativo,
  ultimaLeitura: null,
};

logarMensagem(
  `Status inicial do ${sensorCaldeira.nome}: ${sensorCaldeira.status}`,
);
logarMensagem(`Leitura atual: ${sensorCaldeira.ultimaLeitura}`);

sensorCaldeira.ultimaLeitura = 85.3;
logarMensagem(`Nova leitura detectada: ${sensorCaldeira.ultimaLeitura}`);

if (sensorCaldeira.ultimaLeitura > 80) {
  sensorCaldeira.status = StatusSensor.FalhaCritica;
  logarMensagem(`ALERTA: Mudando status para ${sensorCaldeira.status}`);
}
