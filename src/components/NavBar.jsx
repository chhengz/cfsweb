import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { IoTerminal } from "react-icons/io5";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/members", label: "Members" },
  { path: "/contact", label: "Contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
    
      <nav ref={navRef}>
       <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <Link to={'/'}
          className="block w-fit text-indigo-600 transition duration-500 ease-in-out ">
          <div className="font-bold text-3xl flex items-center text-gray-800 hover:text-blue-600">
            <span className="text-3xl  mr-1 pt-0.5">
              <IoTerminal />
            </span>
            CFS
          </div>
          </Link>

          <div
            onClick={() => setOpen(!open)}
            className="text-4xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {open ? <IoIosClose /> : <CiMenuFries />}
          </div>

          <ul
            className={` md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${
              open ? "top-16" : "-top-75"
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
             <button
             onClick={() => setOpen(!open)}
                  className=" cursor-pointer  bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
                duration-500"
                >
                  <Link to={'/contact'}>Get Started</Link>
                </button>

          </ul>
        </div>
      </div> 
      
      </nav>
      
    

      </>
  );
};

export default NavBar;
