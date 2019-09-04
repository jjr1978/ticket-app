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
    id: Math.floor(Math.random() * 9999),
    proyecto: "1"
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleChangeSelect = (e, data) => {
    this.setState({ [data.id]: data.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.agregarTicket(this.state);
    this.props.close();
  };

  convertirProyectoSelect(proy) {
    return { key: proy.id, text: proy.nombre, value: proy.id };
  }

  render() {
    const { tipo, proyecto } = this.state;
    const proyOptions = this.props.proyectos.map(p =>
      this.convertirProyectoSelect(p)
    );
    return (
      <Form onSubmit={this.handleSubmit} className="form-ticket">
        <Form.Field
          control={Input}
          id="titulo"
          label="Titulo"
          placeholder="Título del Ticket"
          onChange={this.handleChange}
          required
        />
        <Form.Field
          control={TextArea}
          label="Descripción"
          id="descripcion"
          placeholder="Desarrolle el pedido"
          onChange={this.handleChange}
          required
        />
        <Form.Field
          control={Select}
          label="Tipo de Ticket"
          id="tipo"
          options={tipoTicket}
          placeholder="Tipo"
          value={tipo}
          onChange={this.handleChangeSelect}
          required
        />
        <Form.Field
          control={Select}
          label="Proyecto"
          id="proyecto"
          options={proyOptions}
          placeholder="Proyecto"
          value={proyecto}
          onChange={this.handleChangeSelect}
          required
        />
        <Button.Group>
          <Button floated="left" onClick={() => this.props.close()}>
            Cancelar
          </Button>
          <Button floated="right" primary type="submit">
            Crear
          </Button>
        </Button.Group>
      </Form>
    );
  }
}

// ,

const mapStateToProps = state => ({
  tickets: state.tickets,
  proyectos: state.proyectos
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
