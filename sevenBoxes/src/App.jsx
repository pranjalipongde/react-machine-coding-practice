import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [boxColors, setBoxColors] = useState(Array(7).fill("bg-yellow-300"));
  const [clickedBoxes, setClickedBoxes] = useState([]);

  const handleClick = (index) => {
    const newColors = [...boxColors];
    newColors[index] = "bg-green-500";
    setBoxColors(newColors);
    setClickedBoxes([...clickedBoxes, index]);
  };

  useEffect(() => {
    if (clickedBoxes.length === 7) {
      const revertColors = async () => {
        for (let i = 0; i < 7; i++) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          const newColors = [...boxColors];
          newColors[clickedBoxes[i]] = "bg-yellow-300";
          setBoxColors(newColors);
        }
        setClickedBoxes([]);
      };
      revertColors();
    }
  }, [clickedBoxes, boxColors]);

  return (
    <div className="App">
      <div className="container mx-auto">
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-3"></div>
          <div
            className={`w-16 h-16 rounded-lg cursor-pointer ${boxColors[0]}`}
            onClick={() => handleClick(0)}
          ></div>
          <div className="col-span-2"></div>
        </div>

        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-1"></div>
          <div
            className={`w-16 h-16 rounded-lg cursor-pointer ${boxColors[1]}`}
            onClick={() => handleClick(1)}
          ></div>
          <div className="col-span-3"></div>
        </div>

        <div className="grid grid-cols-7 gap-4">
          <div
            className={`w-16 h-16 rounded-lg cursor-pointer ${boxColors[2]}`}
            onClick={() => handleClick(2)}
          ></div>
          <div className="col-span-5"></div>
        </div>

        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-5"></div>
          <div
            className={`w-16 h-16 rounded-lg cursor-pointer ${boxColors[3]}`}
            onClick={() => handleClick(3)}
          ></div>
        </div>

        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-3"></div>
          <div
            className={`w-16 h-16 rounded-lg cursor-pointer ${boxColors[4]}`}
            onClick={() => handleClick(4)}
          ></div>
          <div className="col-span-1"></div>
        </div>

        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-2"></div>
          <div
            className={`w-16 h-16 rounded-lg cursor-pointer ${boxColors[5]}`}
            onClick={() => handleClick(5)}
          ></div>
          <div className="col-span-2"></div>
        </div>

        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-4"></div>
          <div
            className={`w-16 h-16 rounded-lg cursor-pointer ${boxColors[6]}`}
            onClick={() => handleClick(6)}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
