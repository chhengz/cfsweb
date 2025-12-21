import React from "react";
import { Link } from "react-router-dom";

import ICON_IMG from "../../../assets/icon_white.png";
import { Facebook, Github, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      {/* <!-- footer --> */}
      <div className="mt-8 w-full bg-gray-800 px-8 py-8 text-center md:text-start">
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 flex-col md:flex-row ">
          <div className="p-6 ">
            {/* <h2 className='text-xl md:text-2xl font-bold text-white'>CFS Web.</h2> */}

            <div className="w-1/2 md:w-2/3 lg:w-2/4 mx-auto md:mx-0">
              <img src={ICON_IMG} alt="icon" className="w-full" />
            </div>

            <ul className="w-full mt-4 md:mt-6 flex space-x-2 justify-center md:justify-start">
              <li className="bg-gray-200/60 hover:bg-gray-100/80 rounded-xl p-1 w-fit"><Github /></li>
              <li className="bg-gray-200/60 hover:bg-gray-100/80 rounded-xl p-1 w-fit"><Facebook /></li>
              <li className="bg-gray-200/60 hover:bg-gray-100/80 rounded-xl p-1 w-fit"><Youtube /></li>
            </ul>
          </div>
          <div className="p-6 grid gap-2 grid-cols-1 md:grid-cols-2 flex-row md:flex-col justify-between ">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Organization
              </h2>

              <ul className="mt-2">
                <li>
                  <a
                    href="https://www.rupp.edu.kh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Royal University of Phnom Penh
                  </a>
                </li>
                <li>
                  <a
                    href="https://csd-website-xi.vercel.app/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Department of Computer Science
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-6 md:mt-0">
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Information Links
              </h2>
              <ul className="mt-2">
                <li>
                  <Link
                    to={"/about"}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/process"}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center py-2">
          <p className=" text-md text-gray-500 dark:text-gray-400">
            © 2024 CFS Web. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
