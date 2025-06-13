import SimpleValueWidget from "components/ui/SimpleValueWidget";

import "./Dashboard.scss";

const simpleValueWidgetData = [
  { title: "Server load", value: "23%", icon: "Server" },
  { title: "Memory allocation", value: "54%", icon: "Microchip" },
  { title: "Number of processes", value: "154", icon: "Cog" },
];

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
    </>
  );
}
