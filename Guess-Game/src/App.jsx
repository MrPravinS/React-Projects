import { useState } from "react";

import "./App.css";

function App() {
  const [guessNumber, setGuessNumber] = useState(() =>
    Math.floor(Math.random() * 100 + 1)
  );
  const [guessCount, setGuessCOunt] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [message, setMassage] = useState("");

  const checkGuess = () => {
    const inputNumber = parseInt(inputVal.trim());

    if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 100) {
      setMassage("Please enter  number between 1 and 100.");
    } else if (inputNumber === guessNumber) {
      setMassage(
        `Congratulation! You Guess The Correct Number In ${guessCount + 1} Attempt.`
      );
    } else if (inputNumber < guessNumber) {
      setMassage("To low! Try Again");
    } else if (inputNumber > guessNumber) {
      setMassage("To High! Try Again");
    }
    setGuessCOunt((prev) => prev + 1);
  };

  const handleReset = () => {
    setGuessNumber(Math.floor(Math.random() * 100 + 1));
    setMassage("");
    setGuessCOunt(0);
    setInputVal("");
  };

  return (
    <div className="flex justify-center items-center  bg-gray-900 h-screen">
      <div className="  bg-gray-700 rounded-lg shadow-lg w-[600px] h-[500px]">
        <h1 className="text-white justify-center text-center m-4 font-bold text-4xl">
          Number Guess Game
        </h1>
        <div className="flex flex-col justify-center items-center mt-30 ">
          <div className="flex m-3">
            <input
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Enter a number between 1 and 100"
              className="bg-gray-400 rounded-lg justify-center items.center px-2 w-[340px] m-3 py-2 focus:ring-none"
            ></input>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-green-600 px-2 py-1 rounded-lg cursor-pointer hover:bg-green-800 font-bold duration 0.3s text-white m-3"
              onClick={checkGuess}
            >
              Check Guess
            </button>
            <button
              className="bg-blue-600 px-2 py-1 rounded-lg cursor-pointer hover:bg-blue-800 font-bold duration 0.3s text-white m-3"
              onClick={handleReset}
            >
              Reset Game
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center m-3 text-white font-bold">
          {message && <h2 >{message}</h2>}
        </div>
      </div>
    </div>
  );
}

export default App;
