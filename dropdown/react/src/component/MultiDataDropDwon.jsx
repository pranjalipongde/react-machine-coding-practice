import React, { useState } from "react";
import data from "../data.json";

const MultiDataDropDwon = () => {
  const [selectedKey, setSelectedKey] = useState(Object.keys(data)[0]); // Initialize with the first key
  const selectedData = data[selectedKey];

  const handleChange = (event) => {
    setSelectedKey(event.target.value);
  };
  return (
    <div>
      <h1 style={{ color: "white" }}>Multi Layer DropDown</h1>
      {/* <select
        id="one"
        style={{
          position: "relative",
          display: "inline - block",
          padding: "10px 20px",
        }}
      >
        {Object.keys(data).map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select> */}
      <select
        name="tokens"
        id="tokens"
        onChange={handleChange}
        value={selectedKey}
        style={{
          position: "relative",
          display: "inline - block",
          padding: "10px 20px",
        }}
      >
        {Object.keys(data).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <div style={{ color: "white" }}>
        <h2 style={{ color: "white" }}>Selected Token Data:</h2>
        <ul>
          {selectedData.SushiSwap.map((pair, index) => (
            <li key={index}>
              Token 1: {pair.tokenOne.name}, Token 2: {pair.tokenTwo.name}
            </li>
          ))}
        </ul>
        {/* Render additional details based on the selected data */}
      </div>
    </div>
  );
};

export default MultiDataDropDwon;
