import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoTerminal, IoClose, IoMenu } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import '../../../i18n'


const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/team", label: "Team" },
  { path: "/contact", label: "Contact" },
];

const NavBar = () => {
  const { t } = useTranslation();
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
    <nav ref={navRef} className="">
      <div
            onClick={() => setOpen(!open)}
            className="w-10 h-10 flex items-center justify-center text-4xl  text-gray-600 cursor-pointer md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open ? "true" : "false"}
          >
            {open ? <IoClose className="w-10 h-10" /> : <IoMenu className="w-10 h-10" />}
          </div>

        <div className="md:flex items-center  md:px-10 ">
          
          <ul
            className={`md:flex md:items-center shadow-lg md:shadow-[0] md:pb-0 pb-4 absolute md:static bg-white  md:z-auto -z-1 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${
              open ? "top-16" : "-top-75"
            }`}
          >
            {links.map((link) => (
              <li key={link.label} className="md:ml-8 text-xl md:my-0 my-7">
                <NavLink
                  onClick={() => setOpen(false)}
                  to={link.path}
                  className="text-gray-600 hover:text-gray-400 hover:underline duration-500"
                >
                  {t(link.label)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
    </nav>
  );
};

export default NavBar;
