import React from "react";

const Header = () => {
  return (
    <div className="flex  justify-between items-center p-3 border m-3 border-black ">
      <div className=" " >
        <img
        className="rounded-md shadow-sm "
          src="https://imgs.search.brave.com/iz0NxahvWPXTYWBePyVK4f2bTV--JzgwuwPEOogTvDg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZW1w/bGF0ZS5jYW52YS5j/b20vRUFEZ2ZiOGx4/MkUvMi8wLzQwMHct/OG8wV3JocWllblUu/anBn"
          alt="logo"
          height={300}
          width={100}
        />
      </div>
      <div className="flex justify-center">
        <ul className="flex p-2 m-2">
          <li className="p-2 m-2">Home</li>
          <li className="p-2 m-2">About</li>
          <li className="p-2 m-2">Contact</li>
          <li className="p-2 m-2">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
