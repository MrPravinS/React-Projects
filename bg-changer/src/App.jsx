import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen  duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap rounded-lg py-1 justify-center px-2 bottom-12 insect-x-0">
        <div className="flex flex-wrap bg-white justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl">
          <button
            className=" rounded-full px-4 py-1 text-white"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className=" rounded-full px-4 py-1 text-white "
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            blue
          </button>
          <button
            className=" rounded-full px-4 py-1 text-white"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className=" rounded-full px-4 py-1"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className=" rounded-full px-4 py-1 text-white"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className=" rounded-full px-4 py-1"
            style={{ backgroundColor: "lavender" }}
            onClick={() => setColor("lavender")}
          >
            Lavender
          </button>
          <button
            className=" rounded-full px-4 py-1"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className=" rounded-full px-4 py-1"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className=" rounded-full px-4 py-1 outline-none"
            style={{ backgroundColor: "white" }}
            onClick={() => setColor("white")}
          >
            White
          </button>
          <button
            className=" rounded-full px-4 py-1 text-white"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
