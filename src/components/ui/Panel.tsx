import "./Panel.scss";

interface PanelProps {
  title: string;
  children?: React.ReactNode;
}

export default function Panel({ title, children }: PanelProps) {
  return (
    <div className="panel">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
