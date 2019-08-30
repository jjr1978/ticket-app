import React, { Component } from "react";
import { Container, Modal, Button, Icon } from "semantic-ui-react";
import ListaTicket from "./ListaTicket";
import TicketForm from "./TicketForm";

export class Tickets extends Component {
  render() {
    return (
      <Container>
        <Modal
          trigger={
            <Button primary>
              <Icon name="plus" />
              Nuevo Ticket
            </Button>
          }
          centered={true}
        >
          <Modal.Header>Nuevo Ticket</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <TicketForm />
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <ListaTicket />
      </Container>
    );
  }
}

export default Tickets;
