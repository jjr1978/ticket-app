import React, { Component } from "react";
import { Segment, Statistic, Icon, Card } from "semantic-ui-react";
import DashboardRecentAct from "./DashboardRecentAct";
import GraficoProyecto from "./GraficoProyecto";

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
                <Icon name="ticket" color="blue" />4
              </Statistic.Value>
              <Statistic.Label>Tickets Cerrados este mes</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </Segment>
        <Segment>
          <Card>
            <Card.Content header="Tickets por proyecto" />
            <Card.Content>
              <GraficoProyecto />
            </Card.Content>
            <Card.Content extra>
              <Icon name="ticket" />Ver Tickets
            </Card.Content>
          </Card>
        </Segment>
        <Segment>
          <DashboardRecentAct />
        </Segment>
      </div>
    );
  }
}

export default Dashboard;
