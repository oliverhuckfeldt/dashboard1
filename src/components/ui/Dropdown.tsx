import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

import "./Dropdown.scss";

interface DropdownProps {
  children?: React.ReactNode[];
}

export default function Dropdown({ children }: DropdownProps) {
  const dropdownRef = useRef<HTMLButtonElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
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
    <div className="dropdown">
      <button ref={dropdownRef} onClick={toggleDropdown}>
        Profile
      </button>
      <div className={dropdownCssClassList.join(" ")}>
        {children &&
          children.map((child, index) => (
            <div key={index} className="dropdown__item">
              {child}
            </div>
          ))}
      </div>
    </div>
  );
}
