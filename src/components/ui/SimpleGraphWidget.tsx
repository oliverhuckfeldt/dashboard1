import {
  VictoryChart,
  VictoryTheme,
  VictoryLine,
  VictoryScatter,
  VictoryTooltip,
  VictoryAxis,
} from "victory";

import "./SimpleGraphWidget.scss";

interface SimpleGraphWidgetProps {
  title?: string;
  description?: string;
  data: { label: string; value: number }[];
}

export default function SimpleGraphWidget({
  title,
  description,
  data,
}: SimpleGraphWidgetProps) {
  return (
    <div className="simple-graph-widget">
      <h3>{title}</h3>
      <p>{description}</p>
      <VictoryChart theme={VictoryTheme.clean}>
        <VictoryLine
          data={data.map((item) => ({
            x: item.label,
            y: item.value,
          }))}
        />
        <VictoryScatter
          data={data.map((item) => ({
            x: item.label,
            y: item.value,
          }))}
          size={5}
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryTooltip />}
        />
        <VictoryAxis />
      </VictoryChart>
    </div>
  );
}
