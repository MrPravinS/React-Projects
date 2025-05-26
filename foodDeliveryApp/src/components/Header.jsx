import  { useState } from "react";
import {Provider,useSelector} from "react-redux"
import appStore from "./Utils/appStore";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const cartItems = useSelector((store)=>store.cart.items)
  return (
  
    <div className="flex  justify-between items-center p-3 border m-3 border-black ">
      <div className=" ">
        <img
          className="rounded-md shadow-sm "
          src="https://imgs.search.brave.com/iz0NxahvWPXTYWBePyVK4f2bTV--JzgwuwPEOogTvDg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZW1w/bGF0ZS5jYW52YS5j/b20vRUFEZ2ZiOGx4/MkUvMi8wLzQwMHct/OG8wV3JocWllblUu/anBn"
          alt="logo"
          height={300}
          width={100}
        />
      </div>
      <div className="flex justify-center">
        <ul className="flex p-2 m-2 ">
          <li className="p-2 m-2 border rounded-full px-3 py-2 hover:bg-black hover:text-white transition duration-700">
            Home
          </li>
          <li className="p-2 m-2 border rounded-full px-3 py-2 hover:bg-black hover:text-white transition duration-700">
            About
          </li>
          <li className="p-2 m-2 border rounded-full px-3 py-2 hover:bg-black hover:text-white transition duration-700">
            Contact
          </li>
          <li className="p-2 m-2 border rounded-full px-3 py-2 hover:bg-black hover:text-white transition duration-700">
            Cart({cartItems.length} items)
          </li>
          <button
            onClick={() =>
              login === "Login" ? setLogin("Logout") : setLogin("Login")
            }
            className="m-1 p-2 border border-black rounded-lg  cursor-pointer"
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
