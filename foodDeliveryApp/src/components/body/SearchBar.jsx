import React from "react";


const SearchBar = () => {
  return (
    <div className="flex m-4 p-3 bg-gray-200 rounded-md justify-center">
      <div className="p-1 m-1">
        <input className="p-1 rounded-md bg-gray-100 text-black" 
        type="text" placeholder="Enter food"
        />
      </div>
      <div className="p-2 justify-center">
        <button className="bg-blue-600 px-2 py-1 rounded-md text-white hover:bg-blue-800">Serach</button>
      </div>
    </div>
  );
};

export default SearchBar;
