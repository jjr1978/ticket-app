import React, { Component } from "react";
import { Segment, Statistic, Icon } from "semantic-ui-react";
import DashboardRecentAct from "./DashboardRecentAct";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Segment>
          <Statistic.Group size="large">
            <Statistic>
              <Statistic.Value>
                <Icon name="ticket" color="green" />2
              </Statistic.Value>
              <Statistic.Label>Tickets Abiertos</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>
                <Icon name="ticket" color="blue" />
                31
              </Statistic.Value>
              <Statistic.Label>Tickets Cerrados</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>
                <Icon name="ticket" color="blue"/>4
              </Statistic.Value>
              <Statistic.Label>Tickets Cerrados este mes</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </Segment>
        <Segment>
          <DashboardRecentAct />
        </Segment>
      </div>
    );
  }
}

export default Dashboard;
