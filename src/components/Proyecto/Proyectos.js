import React, { Component } from "react";
import { Container, Modal, Button, Icon } from "semantic-ui-react";
import ListaProyectos from "./ListaProyectos";
import ProyectoForm from "./ProyectoForm";

export class Proyectos extends Component {
  state = {
    openModal: false,
    idProyecto: null
  };

  closeModal = () => {
    this.setState({ openModal: false });
  };

  openModal = id => {
    this.setState({ openModal: true , idProyecto: id});
  };

  render() {
    const { openModal, idProyecto } = this.state;
    return (
      <Container>
        <Modal
          trigger={
            <Button primary onClick={() => this.openModal()}>
              <Icon name="plus" />
              Nuevo Proyecto
            </Button>
          }
          centered={true}
          open={openModal}
        >
          <Modal.Header>Proyecto</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <ProyectoForm close={this.closeModal} idProyecto={idProyecto} />
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <ListaProyectos openModal={this.openModal} close={this.closeModal} />
      </Container>
    );
  }
}

export default Proyectos;
