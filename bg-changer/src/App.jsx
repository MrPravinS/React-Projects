import { useState } from "react";
function App() {
  const [color, setcolor] = useState("black");
  return (
    <div
      className="w-full h-screen  duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              setcolor("red");
            }}
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => {
              setcolor("green");
            }}
            className="outline-none text-white rounded-full px-2 py-1 shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => {
              setcolor("blue");
            }}
            className="text-white px-2 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setcolor("lightgreen");
            }}
            className="text-white rounded-full px-2 py-1 shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => {
              setcolor("pink");
            }}
            className="rounded-full px-2 py-1 shadow-full"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
