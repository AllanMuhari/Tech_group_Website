import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import logo from "../../assets/icons/software.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-24 text-white bg-black">
      <div className="w-full max-w-[1240px] px-4 flex justify-between items-center">
        <img src={logo} className="w-[5rem] flex rounded-full" />
        <ul className="hidden md:flex lg:flex-">
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/leadership">Leadership</Link>
          </li>
          <li className="p-4">
            <Link to="/tracks">Tracks</Link>
          </li>
          <li className="p-4">
            <Link to="/events">Events</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <li className="p-4 border-b border-gray-600">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link to="/leadership">Leadership</Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link to="/tracks">Tracks</Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link to="/events">Events</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
