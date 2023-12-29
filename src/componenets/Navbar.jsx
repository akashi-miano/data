import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

  return (
    <nav className="text-white flex justify-between items-center p-8 mx-auto max-w-[1200px]">
      <h1 className="logo w-full text-3xl font-bold text-[#00df9a]">React</h1>
      <ul className="gap-4 hidden md:flex">
        <li>
          <a className="text-lg" href="">
            Home
          </a>
        </li>
        <li>
          <a className="text-lg" href="">
            Company
          </a>
        </li>
        <li>
          <a className="text-lg" href="">
            Resources
          </a>
        </li>
        <li>
          <a className="text-lg" href="">
            About
          </a>
        </li>
        <li>
          <a className="text-lg" href="">
            Contact
          </a>
        </li>
      </ul>
      <div className="mobile-icon-toggle block md:hidden" onClick={handleNav}>
        {nav ? <MdClose fontSize={30}/> : <FaBars fontSize={20}/>}
      </div>
      <div className={nav ? 'mobile-menu fixed left-0 top-0 w-[60%] border-r border-gray-900 h-full bg-[#000300] mt-4 p-8 ease-in-out duration-500 z-10' : 'mobile-menu fixed left-[-100%] z-10'}>
        <h1 className="logo w-full text-3xl font-bold text-[#00df9a]">React</h1>
        <ul className="uppercase p-4">
          <li className="border-b border-gray-600 py-4">
            <a className="text-lg" href="">
              Home
            </a>
          </li>
          <li className="border-b border-gray-600 py-4">
            <a className="text-lg" href="">
              Company
            </a>
          </li>
          <li className="border-b border-gray-600 py-4">
            <a className="text-lg" href="">
              Resources
            </a>
          </li>
          <li className="border-b border-gray-600 py-4">
            <a className="text-lg" href="">
              About
            </a>
          </li>
          <li className="py-4">
            <a className="text-lg" href="">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;