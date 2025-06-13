import SimpleValueWidget from "components/ui/SimpleValueWidget";
import SimpleGraphWidget from "components/ui/SimpleGraphWidget";

import "./Dashboard.scss";

const simpleValueWidgetData = [
  { title: "Server load", value: "23%", icon: "Server" },
  { title: "Memory allocation", value: "54%", icon: "Microchip" },
  { title: "Number of processes", value: "154", icon: "Cog" },
];

const simpleGraphWidgetData = {
  title: "Monthly Sales",
  description: "Sales data for the last six months",
  data: [
    {
      label: "Jan 25",
      value: 49677,
    },
    {
      label: "Feb 25",
      value: 47451,
    },
    {
      label: "Mar 25",
      value: 52690,
    },
    {
      label: "Apr 25",
      value: 51406,
    },
    {
      label: "May 25",
      value: 47320,
    },
    {
      label: "Jun 25",
      value: 50258,
    },
  ],
};

export default function Dashboard() {
  return (
    <>
      <div className="row">
        {simpleValueWidgetData.map((card, index) => (
          <SimpleValueWidget
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
          />
        ))}
      </div>
      <div className="row">
        <SimpleGraphWidget
          title={simpleGraphWidgetData.title}
          description={simpleGraphWidgetData.description}
          data={simpleGraphWidgetData.data}
        />
        <SimpleGraphWidget
          title={simpleGraphWidgetData.title}
          description={simpleGraphWidgetData.description}
          data={simpleGraphWidgetData.data}
        />
      </div>
    </>
  );
}
