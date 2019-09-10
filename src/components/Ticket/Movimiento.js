import React from "react";
import { Feed, Icon } from "semantic-ui-react";

function Movimiento({ movimiento }) {
  return (
    <Feed.Event>
      <Feed.Label>
        <Icon color="blue" circular name="tag"></Icon>
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>{movimiento.user}</Feed.User>
          <Feed.Date>{movimiento.fecha}</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>{movimiento.detalle}</Feed.Extra>
      </Feed.Content>
    </Feed.Event>
  );
}

export default Movimiento;
