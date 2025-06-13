import type { ChartData } from "chart.js";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

import "./SimpleGraphWidget.scss";

interface SimpleGraphWidgetProps {
  title?: string;
  description?: string;
  data: { label: string; value: number }[];
}

Chart.register(CategoryScale);

const options = {
  animation: false as false,
  responsive: true,
  plugins: { legend: { display: false }, tooltip: { displayColors: false } },
  scales: {
    x: {
      grid: { display: false },
      border: { display: false },
    },
    y: {
      ticks: { display: false },
      grid: { display: false },
      border: { display: false },
    },
  },
};

export default function SimpleGraphWidget({
  title,
  description,
  data,
}: SimpleGraphWidgetProps) {
  const chartData: ChartData<"line"> = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 4,
        fill: false,
        cubicInterpolationMode: "monotone",
      },
    ],
  };

  return (
    <div className="simple-graph-widget">
      <h3>{title}</h3>
      <p>{description}</p>
      <Line data={chartData} options={options} />
    </div>
  );
}
