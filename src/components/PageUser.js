import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import LeftPanel from "./LeftPanel";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
// import Dashboard from "./Right/Dashboard";
// import Login from "./Login";
// import ListaTicket from './Right/ListaTicket';
import RightPanel from "./RightPanel";
class PageUser extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Grid padded>
          <LeftPanel />
          <RightPanel />
          {/* <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/listaticket" component={ListaTicket} />
          </Switch> */}
        </Grid>
      </BrowserRouter>
    );
  }
}

export default PageUser;
