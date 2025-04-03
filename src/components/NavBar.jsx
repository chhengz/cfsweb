import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { IoTerminal } from "react-icons/io5";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="font-bold text-3xl flex items-center text-gray-800">
            <span className="text-3xl text-indigo-600 mr-2 pt-1">
              <IoTerminal />
            </span>
            CFS
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-4xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {open ? <IoIosClose /> : <CiMenuFries />}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12  absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${
              open ? "top-12 " : "-top-50"
            }`}
          >
            {links.map((link) => (
              <li key={link.label} className="md:ml-8 text-xl md:my-0 my-7">
                <NavLink
                  onClick={() => setOpen(!open)}
                  to={link.path}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <Button>Get Started</Button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
