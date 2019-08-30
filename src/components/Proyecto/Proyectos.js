import React, { Component } from 'react'
import { Container, Modal, Button, Icon } from 'semantic-ui-react';
import ListaProyectos from './ListaProyectos';

export class Proyectos extends Component {
    render() {
        return (
            <Container>
            <Modal
              trigger={
                <Button primary>
                  <Icon name="plus" />
                  Nuevo Proyecto
                </Button>
              }
              centered={true}
            >
              <Modal.Header>Nuevo Proyecto</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  {/* <TicketForm /> */}
                </Modal.Description>
              </Modal.Content>
            </Modal>
            <ListaProyectos />
          </Container>
        )
    }
}

export default Proyectos
