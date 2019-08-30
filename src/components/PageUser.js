import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import LeftPanel from "./LeftPanel";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import RightPanel from "./RightPanel";
class PageUser extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Grid padded>
          <LeftPanel />
          <RightPanel />
        </Grid>
      </BrowserRouter>
    );
  }
}

export default PageUser;
