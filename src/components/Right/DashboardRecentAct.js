import React from "react";
import { Card, Feed } from "semantic-ui-react";

function DashboardRecentAct() {
  return (
    <Card>
      <Card.Content>
        <Card.Header>Actividad Reciente</Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Feed.Label icon="ticket" />
            <Feed.Content>
              <Feed.Date content="Hoy" />
              <Feed.Summary>
                Se han creado <a>2</a> tickets.
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label icon="ticket" />
            <Feed.Content>
              <Feed.Date content="1 día atrás" />
              <Feed.Summary>
                Se ha creado <a>1</a> tickets.
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label icon="ticket" />
            <Feed.Content>
              <Feed.Date content="2 días atrás" />
              <Feed.Summary>No se crearon tickets</Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Card.Content>
    </Card>
  );
}

export default DashboardRecentAct;
