import { Outlet } from "react-router";

import Topbar from "./Topbar";
import Sidebar from "components/Sidebar";

import "./App.scss";

export default function App() {
  return (
    <>
      <div className="app-size-wrapper">
        <Topbar />
        <main>
          <Outlet />
        </main>
      </div>
      <Sidebar />
    </>
  );
}
