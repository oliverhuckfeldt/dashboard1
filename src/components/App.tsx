import Topbar from "./Topbar";
import Sidebar from "components/Sidebar";
import Main from "components/Main";

import "./App.scss";

export default function App() {
  return (
    <>
      <section className="app-size-wrapper">
        <Topbar />
        <Main />
      </section>
      <Sidebar />
    </>
  );
}
