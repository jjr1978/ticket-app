import React, { Component } from "react";
import { Form, Input, TextArea, Select, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { tipoTicket } from "../../store/store_1";

export class TicketForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.editTicketId
      ? props.tickets.find(p => p.id === props.editTicketId)
      : {
          titulo: "",
          descripcion: "",
          tipo: {},
          estado: "Nuevo",
          id: Math.floor(Math.random() * 9999),
          proyecto: "1"
        };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleChangeSelectProyecto = (e, data) => {
    const nuevoProyecto = this.props.proyectos.find(proy => proy.id === data.value);
    this.setState({ [data.id]: nuevoProyecto });
  };

  handleChangeSelectTipo = (e, data) => {
    const nuevoTipo = this.props.tipoTicket.find(
      tipo => tipo.breve === data.value
    );
    this.setState({
      [data.id]: nuevoTipo
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.agregarTicket(this.state);
    this.props.close();
  };

  convertirProyectoSelect(proy) {
    return { key: proy.id, text: proy.nombre, value: proy.id };
  }

  handleSubmitCrear = e => {
    this.props.agregarTicket(this.state);
    this.props.close();
  };

  handleSubmitEditar = e => {
    this.props.editarTicket(this.state);
    this.props.close();
  };

  handleSubmitEliminar = e => {
    this.props.eliminarTicket(this.state);
    this.props.close();
  };

  render() {
    const { tipo, proyecto, titulo, descripcion } = this.state;
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
          value={titulo}
          required
        />
        <Form.Field
          control={TextArea}
          label="Descripción"
          id="descripcion"
          placeholder="Desarrolle el pedido"
          onChange={this.handleChange}
          value={descripcion}
          required
        />
        <Form.Field
          control={Select}
          label="Tipo de Ticket"
          id="tipo"
          options={tipoTicket}
          placeholder="Tipo"
          value={tipo.breve}
          onChange={this.handleChangeSelectTipo}
          required
        />
        <Form.Field
          control={Select}
          label="Proyecto"
          id="proyecto"
          options={proyOptions}
          placeholder="Proyecto"
          value={proyecto.id}
          onChange={this.handleChangeSelectProyecto}
          required
        />
        <Button.Group>
          <Button floated="left" onClick={() => this.props.close()}>
            Cancelar
          </Button>
          {this.props.editTicketId ? (
            <Button
              floated="right"
              primary
              id="editar"
              onClick={() => this.handleSubmitEditar()}
            >
              Editar Ticket
            </Button>
          ) : (
            <Button
              floated="right"
              primary
              id="crear"
              onClick={() => this.handleSubmitCrear()}
            >
              Crear Ticket
            </Button>
          )}
          {this.props.editTicketId ? (
            <Button
              floated="right"
              negative
              id="eliminar"
              onClick={() => this.handleSubmitEliminar()}
            >
              Eliminar Ticket
            </Button>
          ) : (
            <span></span>
          )}
        </Button.Group>
      </Form>
    );
  }
}

// ,

const mapStateToProps = state => ({
  tickets: state.tickets,
  proyectos: state.proyectos,
  tipoTicket: state.tipoTicket
});
const mapDispatchToProps = dispatch => ({
  agregarTicket(ticket) {
    dispatch({ type: "AGREGAR_TICKET", ticket });
  },
  editarTicket(ticket) {
    dispatch({ type: "EDITAR_TICKET", ticket });
  },
  eliminarTicket(ticket) {
    dispatch({ type: "ELIMINAR_TICKET", ticket });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketForm);
