import React from "react";

interface Props {}

interface State {
  contagem: number;
}
export class Contador extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      contagem: 0,
    };
  }
  public onClick(): void {
    this.setState({ contagem: this.state.contagem + 1 });
  }
  public render() {
    return <div>Contador:{this.state.contagem}</div>;
  }
}
