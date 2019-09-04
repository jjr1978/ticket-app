import React, { Component } from "react";
import { Table, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

export class ListaProyectos extends Component {
  render() {
    const { proyectos, openModal } = this.props;
    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ticket</Table.HeaderCell>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Descripcion</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {proyectos.map(proyecto => (
            <Table.Row key={proyecto.id}>
              <Table.Cell>
                <Icon name="edit" onClick={() => openModal(proyecto.id)} />
              </Table.Cell>
              <Table.Cell>{proyecto.nombre}</Table.Cell>
              <Table.Cell>{proyecto.descripcion}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  proyectos: state.proyectos
});

export default connect(mapStateToProps)(ListaProyectos);
