import React, { Component } from "react";
import { Table, Loader, Dimmer, Icon } from "semantic-ui-react";
import { tickets } from "../../store/store";
import { Link } from "react-router-dom";

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
    return this.state.loading ? (
      <Dimmer active>
        <Loader content="Loading" />
      </Dimmer>
    ) : (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ticket</Table.HeaderCell>
            <Table.HeaderCell>Titulo</Table.HeaderCell>
            <Table.HeaderCell>Descripcion</Table.HeaderCell>
            <Table.HeaderCell>Estado</Table.HeaderCell>
            <Table.HeaderCell>Tipo</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tickets.map(ticket => (
            <Table.Row key={ticket.id}>
              <Table.Cell>
                <Link to="/login">
                  <Icon name="edit" />
                </Link>
              </Table.Cell>
              <Table.Cell>{ticket.titulo}</Table.Cell>
              <Table.Cell>{ticket.descripcion}</Table.Cell>
              <Table.Cell>{ticket.estado}</Table.Cell>
              <Table.Cell>{ticket.tipo}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}

export default ListaTicket;
