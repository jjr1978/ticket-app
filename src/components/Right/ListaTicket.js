import React, { Component } from "react";
import { Table, Loader, Dimmer } from "semantic-ui-react";
import { tickets } from "../../store/store";

export class ListaTicket extends Component {
  constructor() {
    super();
    this.state = {
      tickets: [],
      loading: true
    };
  }

  componentDidMount() {
    this.setState({
      tickets: tickets,
      loading: false
    });
  }
  render() {
    const { tickets } = this.state;
    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Titulo</Table.HeaderCell>
            <Table.HeaderCell>Descripcion</Table.HeaderCell>
            <Table.HeaderCell>Estado</Table.HeaderCell>
            <Table.HeaderCell>Tipo</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.state.loading ? (
            <Dimmer active>
              <Loader content="Loading" />
            </Dimmer>
          ) : (
            tickets.map(ticket => (
              <Table.Row>
                <Table.Cell>{ticket.titulo}</Table.Cell>
                <Table.Cell>{ticket.descripcion}</Table.Cell>
                <Table.Cell>{ticket.estado}</Table.Cell>
                <Table.Cell>{ticket.tipo}</Table.Cell>
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table>
    );
  }
}

export default ListaTicket;
