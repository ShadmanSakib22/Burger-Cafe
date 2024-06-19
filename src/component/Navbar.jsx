import React from "react";
import { PiHamburgerBold } from "react-icons/pi";

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <div className="absolute top-0 left-0 w-full py-[1rem] text-white z-20">
      <div data-aos="fade-down" className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold uppercase text-white border-b-4 border-highGold pb-2">
            Monster <span className="font-normal text-2xl">Burger</span>
          </h1>
          <ul className="space-x-14 text-xl hidden lg:flex text-amber-100">
            <li className="hover:text-white">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-white">
              <a href="#">Services</a>
            </li>
            <li className="hover:text-white">
              <a href="#">Testimonials</a>
            </li>
            <li className="hover:text-white">
              <a href="#">Contact</a>
            </li>
          </ul>
          <div onClick={() => setSidebar(!sidebar)}>
            <PiHamburgerBold className="text-3xl cursor-pointer" color="gold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
