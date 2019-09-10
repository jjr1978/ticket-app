import React, { Component } from "react";
import { Table, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
export class ListaTicket extends Component {
  render() {
    const { tickets, openModal } = this.props;
    return (
      <Table singleLine compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ticket</Table.HeaderCell>
            <Table.HeaderCell>Titulo</Table.HeaderCell>
            <Table.HeaderCell>Descripcion</Table.HeaderCell>
            <Table.HeaderCell>Estado</Table.HeaderCell>
            <Table.HeaderCell>Tipo</Table.HeaderCell>
            <Table.HeaderCell>Proyecto</Table.HeaderCell>
            <Table.HeaderCell>Mov.</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tickets.map(ticket => (
            <Table.Row key={ticket.id}>
              <Table.Cell>
                <Icon name="edit" onClick={() => openModal(ticket.id)} />
              </Table.Cell>
              <Table.Cell>{ticket.titulo}</Table.Cell>
              <Table.Cell>{ticket.descripcion}</Table.Cell>
              <Table.Cell>{ticket.estado}</Table.Cell>
              <Table.Cell>{ticket.tipo.descripcion}</Table.Cell>
              <Table.Cell>{ticket.proyecto.descripcion}</Table.Cell>
              <Table.Cell> <Link to={`/ticket/${ticket.id}`}><Icon name="list" color="blue" /></Link></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets
});

export default connect(mapStateToProps)(ListaTicket);
