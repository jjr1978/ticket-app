import React, { Component } from "react";
import {
  Form,
  Input,
  TextArea,
  Select,
  Button
} from "semantic-ui-react";
import { tipoTicket } from "../../store/store";
export class TicketForm extends Component {
  render() {
    return (
      <Form>
        <Form.Field
          control={Input}
          label="Titulo"
          placeholder="Título del Ticket"
        />
        <Form.Field
          control={TextArea}
          label="Descripción"
          placeholder="Desarrolle el pedido"
        />
        <Form.Field
          control={Select}
          label="Tipo de Ticket"
          options={tipoTicket}
          placeholder="Tipo"
        />
        <div>
          <Button.Group floated="left">
            <Button>Cancelar</Button>
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

export default TicketForm;
