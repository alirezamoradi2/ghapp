import { useState } from "react";

import logo from "../assets/logo.png";
import close from "../assets/close.png";
import menu from "../assets/menu.png";

import { navLinks } from "../constants";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);


    return (
      <nav className="w-full flex py-3 justify-between items-center navbar">
        <a href="#">
          <img src={logo} alt="logo" className="w-[60px] h-[auto]"/>
        </a>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, i) => (
            <li
              key={nav.id}
              className={`font-normal cursor-pointer text[16px] ${
                i === navLinks.length - 1 ? "mr-0" : "mr-10"
              } `}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient
                        absolute top-20 right-0 mx-4 my-2 min-w-[160px] rounded-xl sidebar cursor-pointer z-50`}
          >
            <ul className="list-none flex flex-col-reverse justify-end items-center flex-1">
              {navLinks.map((nav, i) => (
                <li
                  key={nav.id}
                  className={`font-normal cursor-pointer text[16px] ${
                    i === navLinks.length - 1 ? "mr-0" : "mb-3"
                  } text-white`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
