import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center border border-black m-3 ">
      <div className="p-3 items-center bg-orange-500 rounded-lg ml-2 text-black">
        <img height={200} width={200}
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
          alt="logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex m-1 p-4">
            <li className="m-4 p-1 hover:text-white border px-3 py-2 rounded-full cursor-pointer hover:bg-black transition duration-300">Home</li>
            <li className="m-4 p-1 hover:text-white border px-3 py-2 rounded-full cursor-pointer hover:bg-black transition duration-300">About</li>
            <li className="m-4 p-1 hover:text-white border px-3 py-2 rounded-full cursor-pointer hover:bg-black transition duration-300">Contact</li>
            <li className="m-4 p-1 hover:text-white border px-3 py-2 rounded-full cursor-pointer hover:bg-black transition duration-300">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
