import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0); // Previous scroll position
  const [visible, setVisible] = useState(true); // Controls visibility of the navbar

  // Handle scroll event to hide or show the navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // console.log("currentScrollPos" ,currentScrollPos)

      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setVisible(false);
        // console.log(visible)
      } else {
        // Scrolling up
        setVisible(true);
        // console.log(visible)
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  // console.log(prevScrollPos);
  return (
    <>
      <header
        className={`w-full fixed left-0 z-50 transition-all duration-300 ${visible ? `top-0` : `-top-20`} `}
      >
        <NavBar />
      </header>
    </>
  );
};

export default Header;
