import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleState = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "0";
    setState(copyState);
    setIsXTurn(!isXTurn);
    // console.log("Clicked", index);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return ( isWinner ? (
    <>
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-2xl font-bold ">{isWinner} won the Game {" "}</h1>
      <button onClick={() => handleReset()} className="bg-green-300 px-2 py-1 rounded-lg hover:bg-green-400 m-2 cursor-pointer">Play Again</button>{" "}
    </div>
    </>
  ) : (
    <>
        <div className="flex justify-center items-center"><h1 className="text-3xl font-bold ">Please {isXTurn ? "X" : "0"} Move</h1></div>
    <div className="flex h-screen justify-center items-center">
      <div className="">
        <Square onClick={() => handleState(0)} value={state[0]} />
        <Square onClick={() => handleState(1)} value={state[1]} />
        <Square onClick={() => handleState(2)} value={state[2]} />
      </div>
      <div>
        <Square onClick={() => handleState(3)} value={state[3]} />
        <Square onClick={() => handleState(4)} value={state[4]} />
        <Square onClick={() => handleState(5)} value={state[5]} />
      </div>
      <div>
        <Square onClick={() => handleState(6)} value={state[6]} />
        <Square onClick={() => handleState(7)} value={state[7]} />
        <Square onClick={() => handleState(8)} value={state[8]} />
      </div>
    </div>
    </>
  )
  );
  
};


export default Board;
