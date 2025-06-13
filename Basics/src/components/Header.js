import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {
return (
    <div className="flex justify-between bg-white text-black  border-b">
     <div className="">
       <img className="h-24 w-34 rounded-full" src="https://imgs.search.brave.com/ctUQFeIm-UmNPnayuQfx4h4HcHilk4RghbU5cc_RXmg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/NTk2NjQzMi9maWxl/L29yaWdpbmFsLTAz/YzFmZTU3Zjc5MDcw/NzQ5MDU2MzJjYmYx/ODdmMDU4LnBuZz9j/cm9wPTB4MC0yODAw/eDIxMDAmZm9ybWF0/PXdlYnAmcmVzaXpl/PTQwMHgzMDAmdmVy/dGljYWw9Y2VudGVy"
        alt="logo-img"/>
     </div>
     <div className="flex ">
        <ul className="flex gap-10 p-9">
            <li className="bg-black text-white font-bold px-2 py-1 rounded-full hover:scale-110 cursor-pointer hover:bg-white  hover:text-black border  transition duration-300 ease-in "><Link to="/">Home</Link></li>
            <li className="bg-black text-white font-bold px-2 py-1 rounded-full cursor-pointer hover:bg-white  hover:text-black border  transition duration-300 ease-in "><Link to="/about">About</Link></li>
            <li className="bg-black text-white font-bold px-2 py-1 rounded-full cursor-pointer hover:bg-white  hover:text-black border  transition duration-300 ease-in "><Link to="/contact">Contact</Link></li>
            <li className="text-2xl font-bold p-1 cursor-pointer hover:scale-120 transition duration-300"><Link to="/cart"><FaCartPlus /></Link></li>
        </ul>
     </div>
     
    </div>
)
}

export default Header