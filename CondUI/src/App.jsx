// import { useState } from "react";
import "./App.css";
import User from "./coomponents/User";
import Card from "./coomponents/Card";

function App() {
  // const [login, setLogin] = useState(false);

  return (
    <div className=" rounded-md shadow-lg flex justify-center item-center">
      {/* <div className='w-[600px] h-[600px] bg-gray-300 flex flex-col rounded-lg m-2  items-center justify-center'>
      <div className='bg-sky-100 p-3 m-4 rounded-lg text-center'>
        {login ? "Welcome Back!" : "Please Login"}
      </div>
      <button
        className='bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-200 ease-in-out cursor-pointer'
        onClick={() => setLogin(!login)}
      >
        {login ? "Logout" : "Log In"}
      </button>
      <User/>
    </div> */}
      <Card
        image={
          "https://imgs.search.brave.com/4byAlTf20ZeNoVvf8LBKcHWd_ZiUErvwhfqjbMF7gLQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzkzMHg2MjAv/VGF0YS9BdmlueWEv/MTIzNzYvMTczNzM3/ODYxNTExMy9mcm9u/dC1sZWZ0LXNpZGUt/NDcuanBnP2ltd2lk/dGg9ODkwJmltcG9s/aWN5PXJlc2l6ZQ"
        }
        title={"Tata Avinya"}
        description={`The Tata Avinya is an upcoming all-electric SUV that is set to redefine luxury electric mobility in India.
 It is expected to launch in June 2026 with an estimated price of ₹40 Lakh`}
      />
      <Card
        image={
          "https://imgs.search.brave.com/4byAlTf20ZeNoVvf8LBKcHWd_ZiUErvwhfqjbMF7gLQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzkzMHg2MjAv/VGF0YS9BdmlueWEv/MTIzNzYvMTczNzM3/ODYxNTExMy9mcm9u/dC1sZWZ0LXNpZGUt/NDcuanBnP2ltd2lk/dGg9ODkwJmltcG9s/aWN5PXJlc2l6ZQ"
        }
        title={"Tata Avinya"}
        description={`The Tata Avinya is an upcoming all-electric SUV that is set to redefine luxury electric mobility in India.
 It is expected to launch in June 2026 with an estimated price of ₹40 Lakh`}
      />

<Card
        image={
          "https://imgs.search.brave.com/4byAlTf20ZeNoVvf8LBKcHWd_ZiUErvwhfqjbMF7gLQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzkzMHg2MjAv/VGF0YS9BdmlueWEv/MTIzNzYvMTczNzM3/ODYxNTExMy9mcm9u/dC1sZWZ0LXNpZGUt/NDcuanBnP2ltd2lk/dGg9ODkwJmltcG9s/aWN5PXJlc2l6ZQ"
        }
        title={"Tata Avinya"}
        description={`The Tata Avinya is an upcoming all-electric SUV that is set to redefine luxury electric mobility in India.
 It is expected to launch in June 2026 with an estimated price of ₹40 Lakh`}
      />
    </div>

  );
}

export default App;
