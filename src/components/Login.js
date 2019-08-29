import React, { Component } from "react";
import {
  Grid,
  Header,
  Segment,
  Form,
  Button,
  Message
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export class Login extends Component {
  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            Ingresar
          </Header>
          <Segment>
            <Form size="large">
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Email"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Contraseña"
                type="password"
              />

              <Button color="blue" fluid size="large">
                Ingresar
              </Button>
            </Form>
          </Segment>
          <Message>
            No tenes usuario? <a href="/Login">Alta usuario</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
