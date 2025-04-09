import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoTerminal } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import '../../../i18n'
import NavBar from "../navbar/NavBar";

import KH_IMG from '../../../assets/lang/kh.png'
import EN_IMG from '../../../assets/lang/en.png'

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0); // Previous scroll position
  const [visible, setVisible] = useState(true); // Controls visibility of the navbar
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("en");
  const [langFlag, setLangFlag] = useState(KH_IMG);

  // Handle scroll event to hide or show the navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleChangeLang = () => {
    if (lang === 'en') {
      setLang('km')
      setLangFlag(EN_IMG)
      i18n.changeLanguage(lang)
    }

    if (lang === 'km') {
      setLang('en')
      setLangFlag(KH_IMG)
      i18n.changeLanguage(lang)
    }

    console.log(lang)
  }

  console.log(lang)

  // console.log(prevScrollPos);
  return (
    <>
      <header
        className={`fixed items-center justify-between left-0 w-full bg-white shadow-md px-7 py-4 z-50 transition-all duration-300 flex ${visible ? `top-0` : `-top-20`} `}
      >
        <div className="w-full flex items-center justify-between">
          <Link
            to={"/"}
            className="block w-fit text-indigo-600 transition duration-500 ease-in-out "
          >
            <div className="font-bold text-3xl flex items-center text-gray-600 hover:text-blue-600">
              <span className="text-3xl  mr-1">
                <IoTerminal />
              </span>
            </div>
          </Link>
          <div className="flex items-center">
            <NavBar />

            <button
              onClick={handleChangeLang}
              className="w-10 h-6 aspect-video cursor-pointer rounded overflow-hidden "
            >
              <img
                src={langFlag}
                alt="switch-lang"
                className="w-full h-full object-cover" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
