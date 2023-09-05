import { useState } from "react";
import "./App.css";
import Accordian from "./Accordian";

function App() {
  // const accordianData = {
  //   title: "Section 1",
  //   content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
  //     laborum cupiditate possimus labore, hic temporibus velit dicta earum
  //     suscipit commodi eum enim atque at? Et perspiciatis dolore iure
  //     voluptatem.`,
  // };

  // const { title, content } = accordianData;

  //to open and close the accordian
  // const [isActive, setIsActive] = useState(false);

  const accordionData = [
    {
      title: "Section 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
      title: "Section 2",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title: "Section 3",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
  ];

  return (
    <>
      <h1>React Accordian</h1>
      {/* <div className="accordian">
        <div className="accordian-item">
          <div
            className="accordian-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div>{title}</div>
            <div>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && <div className="accordian-content">{content}</div>}
        </div>
      </div> */}

      {/* if you want to add multiple content  */}
      <div className="accordian">
        {accordionData.map(({ title, content }) => (
          <Accordian title={title} content={content} />
        ))}
      </div>
    </>
  );
}

export default App;
