import React from "react";

const Body = () => {
  return (
    <div className=" justify-center">
      <div className=" bg-gray-300 p-3 rounded-md ">
        <input type="text" placeholder="Enter Food" className="pl-2 text-black rounded-lg" />
        <button className="ml-2 p-1 bg-blue-600 px-2 py-1 rounded-lg text-white hover:bg-blue-700 cursor-pointer">Search</button>
      </div>
      <div className="w-[270px] h-[280px] m-4 bg-gray-200">
        
      </div>
    </div>
  );
};

export default Body;
