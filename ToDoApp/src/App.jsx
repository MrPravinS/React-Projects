import { useState } from "react";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTask] = useState([]);
  const [completed,setcompleted] = useState(false)

  const handleTask = () => {
    if (input.trim() !== "") {
      setTask([...tasks, input.trim()]);
      setInput("");
    }
  };

  const handleDeleteTask = (index) => {
    const deleted = [...tasks];
    deleted.splice(index, 1);
    setTask(deleted);
  };

  const handleCompleted = (index) => {
    const addCom = [...tasks]
    addCom.splice(index,1)
    setcompleted(addCom)
  }

  const handleEnterKey = (e) => {
    if(e.key === "Enter"){
      handleTask()
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-100">
      <div className="w-[500px] h-[500px] shadow-2xl rounded-2xl bg-gray-200 border border-black p-6 ">
        <h1 className="text-2xl font-semibold text-center m-4">Todo App</h1>

        <input
          type="text"
          className="p-2 m-2  text-xl bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input}
          onKeyDown={handleEnterKey}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 px-3 rounded-lg  py-2 text-white cursor-pointer hover:bg-blue-600"
          onClick={() => handleTask()}
        >
          Add
        </button>

        {tasks.map((task, index) => (
          <span className={`flex  justify-between items-center m-3 p-3 rounded-lg ${completed ? "bg-green-300" : "bg-red-400"} `} key={index}>
            {task}{" "}
            <div className="flex justify-between">
            <button className="cursor-pointer bg-green-300 px-2 rounded-lg hover:bg-green-400" onClick={()=>handleCompleted(index)}>{completed ? "Uncompleted":"Completed"}</button>
            <button
              onClick={() => handleDeleteTask(index)}
              className="ml-2 text-blue-500 hover:text-red-600 cursor-pointer"
            >
              X
            </button>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
