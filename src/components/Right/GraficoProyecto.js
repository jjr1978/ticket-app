import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [{ name: "APEX", value: 2 }, { name: "SIGeMi", value: 4 }];

const COLORS = ["#0088FE", "#00C49F"];

//

export default class GraficoProyecto extends PureComponent {
  //   static jsfiddleUrl = "https://jsfiddle.net/alidingling/c9pL8k61/";

  render() {
    return (
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={70}
          outerRadius={100}
          fill="#8884d8"
          labelLine={false}
          label
          paddingAngle={8}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
