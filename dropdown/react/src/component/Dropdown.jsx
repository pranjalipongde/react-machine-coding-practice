import { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import list from "../list.json";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center w-[340px] h-[400px] rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className=" bg-[#DFD7BF] p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-[#40128B] duration-300 active:text-[#40128B]"
      >
        Dropdown
        {!isOpen ? (
          <AiFillCaretDown className="h-8" />
        ) : (
          <AiFillCaretUp className="h-8" />
        )}
      </button>
      {isOpen && (
        <div className="bg-[#FFC6AC] absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
          {list.map((item, i) => (
            <div
              className="flex
            w-full justify-between hover:bg-[#9E9FA5] cursor-pointer rounded-r-lg border-l-transparent p-4  hover:border-l-[#614BC3] border-l-4"
              key={i}
            >
              <h3 className="font-bold">{item.city}</h3>
              <h3 className="font-bold">{item.emoticon}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
