import React, { Component } from "react";
import { Table, Loader, Dimmer, Icon } from "semantic-ui-react";
// import { tickets } from "../../store/store_1";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class ListaTicket extends Component {
  // componentDidMount() {
  //   this.setState({
  //     tickets: tickets,
  //     loading: false
  //   });

  render() {
    // const { tickets } = this.state;
    // return this.state.loading ? (
    //   <Dimmer active>
    //     <Loader content="Loading" />
    //   </Dimmer>
    // ) : (

    return (
      <Table singleLine compact>
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
          {this.props.tickets.map(ticket => (
            <Table.Row key={ticket.id}>
              <Table.Cell>
                <Link to="/login">
                  <Icon name="edit" />
                </Link>

                <Icon
                  name="delete"
                  color="red"
                  onClick={() => this.props.deleteTicket(ticket.id)}
                />
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

const mapStateToProps = state => ({
  tickets: state.tickets
});
const mapDispatchToProps = dispatch => ({
  deleteTicket(id) {
    dispatch({
      type: "ELIMINAR_TICKET",
      id
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaTicket);
