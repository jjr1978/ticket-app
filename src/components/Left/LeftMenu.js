import React, { Component } from "react";
import { Menu, Label, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

export class LeftMenu extends Component {
  render() {
    return (
      <Menu vertical>
        <Menu.Item name="resumen">
          <Label>1</Label>
          <Link to="/dashboard">Resumen </Link>
        </Menu.Item>
        <Menu.Item name="tickets">
          <Label>2 </Label>
          <Link to="/tickets">Tickets</Link>
        </Menu.Item>

        <Menu.Item name="proyectos">
          <Label>2</Label>
          <Link to="/proyectos">Proyectos</Link>
        </Menu.Item>
        <Menu.Item name="categorias">
          <Label>1</Label>
          Categorias
        </Menu.Item>
        <Menu.Item name="reportes">
          <Label>1</Label>
          Reportes
        </Menu.Item>
        <Menu.Item name="configuracion">
          <Label>1</Label>
          Configuracion
        </Menu.Item>
        <Menu.Item>
          <Input icon="search" placeholder="Buscar..." />
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftMenu;
