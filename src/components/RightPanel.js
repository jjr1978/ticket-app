import React, { Component } from "react";
import { GridColumn } from "semantic-ui-react";
import ListaTicket from "./Right/ListaTicket";
import { Switch, Route, Redirect } from "react-router-dom";
import Ticket from "./Right/Ticket";
import Dashboard from "./Right/Dashboard";
import Login from './Login';

export class RightPanel extends Component {
  render() {
    return (
      <GridColumn
        padded
        className="content-right-panel"
        floated="right"
        computer="13"
        mobile="13"
        style={{ marginTop: "7em" }}
      >
        {/* <Redirect exact from="/" to="/dashboard" /> */}
        <Switch>
          <Route path="/listaticket" component={ListaTicket} />
          <Route path="/ticket" component={Ticket} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
        </Switch>
      </GridColumn>
    );
  }
}

export default RightPanel;
