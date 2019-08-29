import React, { Component } from "react";
import { Segment, Statistic, Icon } from "semantic-ui-react";

export class Dashboard extends Component {
  render() {
    return (
      <Segment>
        <Statistic.Group size="large">
          <Statistic>
            <Statistic.Value>
              <Icon name="ticket" />2
            </Statistic.Value>
            <Statistic.Label>Tickets Abiertos</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>
              <Icon name="ticket" />
              31
            </Statistic.Value>
            <Statistic.Label>Tickets Cerrados</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>
              <Icon name="ticket" />4
            </Statistic.Value>
            <Statistic.Label>Tickets Cerrados este mes</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Segment>
    );
  }
}

export default Dashboard;
