import React, { Component } from "react";
import { Container, Modal, Button, Icon } from "semantic-ui-react";
import ListaTicket from "./ListaTicket";
import TicketForm from "./TicketForm";

export class Tickets extends Component {
  state = {
    openModal: false
  };

  closeModal = () => {
    this.setState({ openModal: false });
  };

  openModal = () => {
    this.setState({ openModal: true });
  };
  render() {
    const { openModal } = this.state;
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
              <TicketForm close={this.closeModal} />
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <ListaTicket />
      </Container>
    );
  }
}

export default Tickets;
