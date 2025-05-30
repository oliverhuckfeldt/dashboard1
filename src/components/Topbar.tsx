import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import "./Topbar.scss";

export default function Topbar() {
  const dropdownRef = useRef<HTMLButtonElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownCssClassList = ["dropdown__content"].concat(
    dropdownOpen ? ["dropdown__content--show"] : []
  );

  const toggleDropdown = () => {
    setDropdownOpen((dropdownOpen) => !dropdownOpen);
  };

  useEffect(() => {
    function close(e: MouseEvent) {
      if (e.target === dropdownRef.current) {
        return; // Clicked inside the dropdown, do nothing
      }
      setDropdownOpen(false);
    }
    if (dropdownOpen) {
      window.addEventListener("click", close);
    }
    return function () {
      window.removeEventListener("click", close); // Cleanup the event listener
    };
  }, [dropdownOpen]);

  return (
    <section className="topbar">
      <h1 className="logo">
        <a href="#">Dashboard 1</a>
      </h1>
      <div className="dropdown">
        <button ref={dropdownRef} onClick={toggleDropdown}>
          Profile
        </button>
        <div className={dropdownCssClassList.join(" ")}>
          <a href="#">Settings</a>
          <a href="#">Logout</a>
        </div>
      </div>
    </section>
  );
}
