import { useEffect } from "react";
import { useCallback } from "react";
import { useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+=~[]{}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswrodToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 p-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="flex justify-center text-2xl text-white font-bold mb-2">
          Password Generator
        </h1>
        <div className="flex overflow-hidden mb-2 shadow rounded-lg ">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="outline-none  w-full py-1 px-2"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswrodToClipBoard}
            className="bg-blue-700 outline-none hover:bg-blue-900 hover:scale-110  rounded-md px-3 py-1 text-white"
          >
            Copy
          </button>
        </div>
        <div className="flex gap-3 mb-2">
          <div>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="m-2 py-2 ">Length:{length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
