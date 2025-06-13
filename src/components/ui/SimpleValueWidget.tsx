import { icons } from "lib/tools";

import "./SimpleValueWidget.scss";

interface SimpleValueWidgetProps {
  title: string;
  value: string;
  icon?: string;
}

export default function SimpleValueWidget({
  title,
  value,
  icon,
}: SimpleValueWidgetProps) {
  const Icon = icon ? icons[icon] : null;

  return (
    <div className="simple-value-widget">
      {Icon && <Icon size={24} />}
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}
