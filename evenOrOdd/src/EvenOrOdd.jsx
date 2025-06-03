import React, { useState } from 'react';
import './App.css';

function EvenOrOddChecker() {
  const [inputVal, setInput] = useState("")
  const [msg,setMsg] = useState('')

  const handleInputBtn = () => {
    setMsg("Checking...")
    
    let num = parseInt(inputVal)

    setTimeout(() => {
      if (isNaN(num) || inputVal.trim() === "") {
      setMsg("Please enter a valid number.")
    //   return;
    }
    // else if (isNaN(num)) {
    //   setMsg("Please enter a valid number.")
    // }=
    else if (num % 2 === 0) {
        setMsg(`The number ${inputVal} is even.`)
      } else {
        setMsg(`The number ${inputVal} is odd.`)
      }
      setInput("")
    }, 1000)
    
    
 }


  const handleChange = (e) => {
    const value = e.target.value
    setInput(value)

    if (value.trim() === "") {
    setMsg("")
   }
 }

  return (
    <div className="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>

      <input
        value={inputVal}
        onChange={handleChange}
        className="number-input"
        type="text"
        placeholder="Enter a number"
      />

      <button onClick={handleInputBtn} className="check-button">Check</button>

      <div className="result-area">
        {msg &&
          <div className="result">{msg}</div>}
      </div>
    </div>
  );
}

export default EvenOrOddChecker;
