import React, { Component } from "react";
import { Form, Input, TextArea, Select, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { tipoTicket } from "../../store/store_1";

export class TicketForm extends Component {
  state = {
    titulo: "",
    descripcion: "",
    tipo: null,
    estado: "Nuevo",
    id: Math.floor(Math.random() * 9999)
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleChangeTipo = (e, data) => {
    this.setState({ tipo: data.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.agregarTicket(this.state);
    this.props.close();
  };

  render() {
    const {tipo} = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field
          control={Input}
          id="titulo"
          label="Titulo"
          placeholder="Título del Ticket"
          onChange={this.handleChange}
        />
        <Form.Field
          control={TextArea}
          label="Descripción"
          id="descripcion"
          placeholder="Desarrolle el pedido"
          onChange={this.handleChange}
        />
        <Form.Field
          control={Select}
          label="Tipo de Ticket"
          id="tipo"
          options={tipoTicket}
          placeholder="Tipo"
           value={tipo}
          onChange={this.handleChangeTipo}
        />
        <div>
          <Button.Group floated="left">
            <Button onClick={() => this.props.close()}>Cancelar</Button>
          </Button.Group>
          <Button.Group floated="right">
            <Button primary type="submit">
              Nuevo
            </Button>
          </Button.Group>
        </div>
      </Form>
    );
  }
}

// ,

const mapStateToProps = state => ({
  tickets: state.tickets
});
const mapDispatchToProps = dispatch => ({
  agregarTicket(ticket) {
    dispatch({
      type: "AGREGAR_TICKET",
      ticket
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketForm);
