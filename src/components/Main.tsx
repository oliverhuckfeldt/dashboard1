import Card from "components/ui/Card";

import "./Main.scss";

const cardData = [
  { title: "Server load", value: "23%" },
  { title: "Memory allocation", value: "54%" },
  { title: "Number of processes", value: "154" },
];

export default function () {
  return (
    <main>
      <div className="row">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} value={card.value} />
        ))}
      </div>
    </main>
  );
}
