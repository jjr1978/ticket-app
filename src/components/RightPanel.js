import React, { Component } from "react";
import { GridColumn } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Right/Dashboard";
import Login from "./Login";
import Tickets from  './Ticket/Tickets';
import Proyectos from './Proyecto/Proyectos';

export class RightPanel extends Component {
  render() {
    return (
      <GridColumn
        // padded
        className="content-right-panel"
        floated="right"
        computer="13"
        mobile="13"
        style={{ marginTop: "7em" }}
      >
        <Switch>
          <Route path="/tickets" component={Tickets} />
          {/* <Route path="/ticket" component={Ticket} /> */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/proyectos" component={Proyectos} />
        </Switch>
      </GridColumn>
    );
  }
}

export default RightPanel;
