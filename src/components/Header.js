import React, { Component } from "react";
import { Grid, Item, Menu, Container } from "semantic-ui-react";
import {Link} from 'react-router-dom';
export class Header extends Component {
  render() {
    return (
      <Grid padded>
        <Menu fixed="top" inverted>
          <Container>
            <Item>Ticket</Item>
            <Menu inverted floated="right">
              <Menu.Item>
                <Link to="/login"> Ingresar</Link>
              </Menu.Item>
              <Menu.Item>Salir</Menu.Item>
            </Menu>
          </Container>
        </Menu>
      </Grid>
    );
  }
}

export default Header;
