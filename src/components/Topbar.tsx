import Dropdown from "components/ui/Dropdown";

import "./Topbar.scss";

export default function Topbar() {
  return (
    <section className="topbar">
      <h1 className="logo">
        <a href="#">Dashboard 1</a>
      </h1>
      <Dropdown>
        <a href="#">Settings</a>
        <a href="#">Logout</a>
      </Dropdown>
    </section>
  );
}
