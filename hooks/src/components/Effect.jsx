import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter mounted");
  }, []);

  const handleInc = () => setCount(count + 1);

  const handleDec = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <button
        style={{
          padding: "10px",
          background: "red",
          border: "none",
          fontSize: "1rem",
        }}
        onClick={handleInc}
      >
        Increment
      </button>{" "}
      <button
        style={{
          padding: "10px",
          background: "green",
          border: "none",
          fontSize: "1rem",
        }}
        onClick={handleDec}
      >
        Decrement
      </button>
    </div>
  );
};

export default Effect;
