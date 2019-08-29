import React, { Component } from "react";
import { GridColumn, Container } from "semantic-ui-react";
import LeftHeader from "./LeftHeader";
import LeftMenu from "./LeftMenu";
import LeftFooter from "./LeftFooter";
import "./LeftPanel.scss";

export class LeftPanel extends Component {
  render() {
    return (
      <GridColumn className="sidebar-left-panel" computer="3" mobile="3">
        <Container>
          <LeftHeader />
          <LeftMenu />
          <LeftFooter />
        </Container>
      </GridColumn>
    );
  }
}

export default LeftPanel;
