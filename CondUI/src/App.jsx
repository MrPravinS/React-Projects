import { useState } from 'react';
import './App.css';

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className=' rounded-md shadow-lg flex justify-center item-center'>
    <div className='w-[600px] h-[600px] bg-gray-300 flex flex-col rounded-lg m-2  items-center justify-center'>
      <div className='bg-sky-100 p-3 m-4 rounded-lg text-center'>
        {login ? "Welcome Back!" : "Please Login"}
      </div>
      <button
        className='bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-200 ease-in-out cursor-pointer'
        onClick={() => setLogin(!login)}
      >
        {login ? "Logout" : "Log In"}
      </button>
    </div>
    </div>
  );
}

export default App;
