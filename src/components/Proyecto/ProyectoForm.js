import React, { Component } from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import { connect } from "react-redux";

export class ProyectoForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.idProyecto
      ? props.proyectos.find(p => p.id === props.idProyecto)
      : {
          nombre: "",
          descripcion: "",
          id: Math.floor(Math.random() * 9999)
        };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmitCrear = e => {
    this.props.agregarProyecto(this.state);
    this.props.close();
  };

  handleSubmitEditar = e => {
    this.props.editarProyecto(this.state);
    this.props.close();
  };

  handleSubmitEliminar = e => {
    this.props.eliminarProyecto(this.state);
    this.props.close();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="form-proyecto">
        <Form.Field
          control={Input}
          id="nombre"
          label="Nombre"
          placeholder="Nombre del Proyecto"
          onChange={this.handleChange}
          value={this.state.nombre}
        />
        <Form.Field
          control={TextArea}
          label="Descripción"
          id="descripcion"
          placeholder="Desarrolle del Proyecto"
          onChange={this.handleChange}
          value={this.state.descripcion}
        />
        <Button.Group>
          <Button floated="left" onClick={() => this.props.close()}>
            Cancelar
          </Button>
          {this.props.idProyecto ? (
            <Button
              floated="right"
              primary
              id="editar"
              onClick={() => this.handleSubmitEditar()}
            >
              Editar Proyecto
            </Button>
          ) : (
            <Button
              floated="right"
              primary
              id="crear"
              onClick={() => this.handleSubmitCrear()}
            >
              Crear Proyecto
            </Button>
          )}
          {this.props.idProyecto ? (
            <Button
              floated="right"
              negative
              id="eliminar"
              onClick={() => this.handleSubmitEliminar()}
            >
              Eliminar Proyecto
            </Button>
          ) : (
            <span></span>
          )}
        </Button.Group>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  proyectos: state.proyectos
});
const mapDispatchToProps = dispatch => ({
  agregarProyecto(proyecto) {
    dispatch({
      type: "AGREGAR_PROYECTO",
      proyecto
    });
  },
  editarProyecto(proyecto) {
    dispatch({
      type: "EDITAR_PROYECTO",
      proyecto
    });
  },
  eliminarProyecto(proyecto) {
    dispatch({
      type: "ELIMINAR_PROYECTO",
      proyecto
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProyectoForm);
