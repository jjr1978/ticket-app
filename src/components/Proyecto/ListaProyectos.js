import React, { Component } from "react";
import { Table, Dimmer, Loader, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { proyectos } from "../../store/store";

export class ListaProyectos extends Component {
  constructor() {
    super();
    this.state = {
      proyectos: [],
      loading: true
    };
  }

  componentDidMount() {
    this.setState({
      proyectos: proyectos,
      loading: false
    });
  }
  render() {
    const { proyectos } = this.state;

    return  this.state.loading ? (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer> 
      ) : (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ticket</Table.HeaderCell>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Descripcion</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.state.loading ? (<span>Cargando...</span>) : (
            proyectos.map(proyecto => (
              <Table.Row key={proyecto.id}>
                <Table.Cell>
                  <Link to="/login">
                    <Icon name="edit" />
                  </Link>
                </Table.Cell>
                <Table.Cell>{proyecto.nombre}</Table.Cell>
                <Table.Cell>{proyecto.descripcion}</Table.Cell>
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table>
    );
  }
}

export default ListaProyectos;
