import React, { useState } from "react";
import "./dropdown.css";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import list from "../list.json";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="main">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="dropdown-btn"
      >
        Dropdown
        {!isOpen ? (
          <IoMdArrowDropdownCircle className="icon" />
        ) : (
          <IoMdArrowDropupCircle className="icon" />
        )}
      </button>

      {isOpen && (
        <div className="bg-list">
          {list.map((item, i) => (
            <div className="list" key={i}>
              <h3>{item.city}</h3>
              <h3>{item.emoticon}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
