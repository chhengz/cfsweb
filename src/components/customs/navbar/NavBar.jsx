import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoClose, IoMenu, IoTerminal } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import '../../../i18n'

// flags
import KH_IMG from '../../../assets/lang/kh.png'
import EN_IMG from '../../../assets/lang/en.png'
// import LanguageSelector from '../button/LanguageSelector';

// links
const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/team", label: "Team" },
  { path: "/contact", label: "Contact" },
];

const NavBar = () => {
  const { t, i18n } = useTranslation();
  // const [lang, setLang] = useState(i18n.language);
  const [lang, setLang] = useState('en');
  const [langFlag, setLangFlag] = useState(KH_IMG);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);


  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
        if (langDropdownOpen) {
          setLangDropdownOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langDropdownOpen]);

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

  // Language switcher
  const handleChangeLang = () => {
    if (lang === 'en') {
      setLang('km');
      setLangFlag(EN_IMG);
      i18n.changeLanguage('km');
    } else {
      setLang('en');
      setLangFlag(KH_IMG);
      i18n.changeLanguage('en');
    }
  };
  
  // Language switcher v2
  // const selectLanguage = (langCode, flagImage) => {
  //   setLang(langCode);
  //   setLangFlag(flagImage);
  //   i18n.changeLanguage(langCode);
  //   setLangDropdownOpen(false);
  // };

  return (
    <nav
      className={`fixed items-center justify-between left-0 w-full z-50 transition-all duration-300 
        ${visible ? `top-0` : `-top-18`}`}
    >
      <div className="flex md:flex items-center justify-between md:px-10  shadow-md bg-white px-6 py-4">
        <Link
          to={"/"}
          className="block w-fit transition duration-500 ease-in-out "
        >
          <div className="font-bold text-3xl flex items-center text-gray-600 hover:text-gray-400">
            <IoTerminal />
          </div>
        </Link>


        <div ref={navRef} className='flex flex-row-reverse items-center'>

          <div
            onClick={() => setOpen(!open)}
            className="w-10 h-10 flex items-center justify-center text-4xl  text-gray-600 cursor-pointer md:hidden hover:drop-shadow-md"
            aria-label="Toggle navigation menu"
            aria-expanded={open ? "true" : "false"}
          >
            {open ? <IoClose className="w-10 h-10" /> : <IoMenu className="w-10 h-10" />}
          </div>
          <ul
            className={`md:flex md:items-center shadow-lg md:shadow-[0] absolute md:static  bg-white md:bg-white md:z-auto -z-1 left-0 w-full md:w-auto md:pl-0 px-6 transition-all duration-200 ease-in 
                ${open ? "top-18" : "-top-68"}`}
          >
            {links.map((link, i) => (
              <li key={i} className="flex items-center md:ml-8 text-xl md:my-0 my-8 bg-white">
                <NavLink
                  onClick={() => setOpen(false)}
                  to={link.path}
                  className="block w-fit font-bold text-gray-600 hover:text-gray-400 duration-500 active:text-blue-500"
                >
                  {t(link.label)}
                </NavLink>
              </li>
            ))}

          </ul>
          <div className='md:ml-8 mr-2 flex items-center justify-center hover:drop-shadow-md'>

              <button
                onClick={handleChangeLang}
                className="w-10 h-7 aspect-video cursor-pointer rounded overflow-hidden "
              >
                <img
                  src={langFlag}
                  alt="switch-lang"
                  className="w-full h-full object-cover" />
              </button>

            </div>

          {/* <div className="relative md:ml-8 mr-2 flex items-center justify-center hover:drop-shadow-md">
            <button
              onClick={() => setLangDropdownOpen(prev => !prev)}
              className="w-10 h-7 aspect-video cursor-pointer rounded overflow-hidden border"
            >
              <img
                src={langFlag}
                alt="switch-lang"
                className="w-full h-full object-cover"
              />
            </button>

            {langDropdownOpen && (
              <div className="absolute w-auto top-10 right-0 bg-white rounded shadow-md z-50">
               
                <button
                  onClick={() => {
                    setLang('km');
                    setLangFlag(EN_IMG);
                    // i18n.changeLanguage('km');
                    selectLanguage('km', EN_IMG)
                    setLangDropdownOpen(false);
                  }}
                  className="w-10 h-7 aspect-video cursor-pointer m-2"
                >
                  <img
                    src={KH_IMG}
                    alt="Khmer"
                    className="w-full h-full object-cover"
                  />
                </button>

               
                <button
                  onClick={() => {
                    setLang('en');
                    setLangFlag(KH_IMG);
                    // i18n.changeLanguage('en');
                    selectLanguage('en', KH_IMG)
                    setLangDropdownOpen(false);
                  }}
                  className="w-10 h-7 aspect-video cursor-pointer m-2 mt-0"
                >
                  <img
                    src={EN_IMG}
                    alt="English"
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>
            )}
          </div> */}


        </div>
      </div>
    </nav>
  )
}

export default NavBar