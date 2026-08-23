declare namespace JSX {
  interface IntrinsicElements {
    div: any;
  }
}

interface MeuComponenteProps {
  nome: string;
}

function MeuComponente(props: MeuComponenteProps) {
  return <div>{props.nome}</div>;
}

class OutroComponente {
  render() {
    return <MeuComponente nome="Alguem" />;
  }
}
