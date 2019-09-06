import React, { Component } from "react";
import { Container, Modal, Button, Icon } from "semantic-ui-react";
import ListaTicket from "./ListaTicket";
import TicketForm from "./TicketForm";

export class Tickets extends Component {
  state = {
    openModal: false,
    editTicketId: null
  };

  closeModal = () => {
    this.setState({ openModal: false });
  };

  openModal = id => {
    this.setState({ openModal: true, editTicketId: id });
  };
  render() {
    const { openModal, editTicketId } = this.state;
    return (
      <Container>
        <Modal
          trigger={
            <Button primary onClick={() => this.openModal()}>
              <Icon name="plus" />
              Nuevo Ticket
            </Button>
          }
          centered={true}
          open={openModal}
        >
          <Modal.Header>Nuevo Ticket</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <TicketForm close={this.closeModal} editTicketId={editTicketId} />
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <ListaTicket openModal={this.openModal} close={this.closeModal} />
      </Container>
    );
  }
}

export default Tickets;
