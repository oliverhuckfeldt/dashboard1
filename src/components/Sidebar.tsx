import { NavLink } from "react-router";

import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <a href="">Menu 3</a>
        </li>
      </ul>
    </aside>
  );
}
