import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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

  const handleGetStartedClick = () => {
    setOpen(false); // Close the menu when the button is clicked
    navigate("/contact");
  };

  return (
    <nav ref={navRef} >
      <div className="shadow-md w-full">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <Link
            to={"/"}
            onClick={() => setOpen(false)}
            className="block w-fit text-indigo-600 transition duration-500 ease-in-out "
          >
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
            aria-label="Toggle navigation menu"
            aria-expanded={open ? "true" : "false"}
          >
            {open ? <IoIosClose /> : <CiMenuFries />}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${
              open ? "top-16 opacity-100" : "-top-75 opacity-0"
            }`}
          >
            {links.map((link) => (
              <li key={link.label} className="md:ml-8 text-xl md:my-0 my-7">
                <NavLink
                  onClick={() => setOpen(false)}
                  to={link.path}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <button
              onClick={handleGetStartedClick}
              className="cursor-pointer bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500"
            >
              Get Started
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
