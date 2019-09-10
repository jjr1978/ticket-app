import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Header, Feed, Icon } from "semantic-ui-react";
import Movimiento from "./Movimiento";

class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = props.tickets.find(
      t => t.id === parseInt(props.match.params.id)
    );
  }

  render() {
    const { titulo, descripcion, movimientos } = this.state;
    return (
      <Segment>
        <Header>{titulo}</Header>
        <p>{descripcion}</p>
        <Segment>
          <Header>Movimientos</Header>
          <Feed>
            {movimientos.map(mov => (
              <Movimiento movimiento={mov} />
            ))}
          </Feed>
        </Segment>
      </Segment>
    );
  }
}
const mapStateToProps = state => ({
  tickets: state.tickets
  // proyectos: state.proyectos,
  // tipoTicket: state.tipoTicket
});

export default connect(mapStateToProps)(Ticket);
