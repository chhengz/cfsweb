import React from "react";
import { Outlet } from "react-router-dom";

// Components
import Header from "../customs/header/Header";
import NavBar from "../customs/navbar/NavBar";
import ScrollToTop from "../customs/scroll/ScrollToTop";
import ReadingProgress from "../customs/progressbar/ReadingProgress";
// import ScrollToTopButton from "../customs/ScrollToTopButton";

// Pages
import { Hero } from "../../pages";

const RootLayout = () => {
  return (
    <>
      <div>
        <ScrollToTop /> 
        <ReadingProgress />
        {/* <ScrollToTopButton /> */}
        {/* <Header /> */}
        <NavBar />

        <div className="w-full">
          {/* Hero section */}
            <div className="w-full h-screen fixed top-0 left-0 -z-50 bg-gradient-to-b from-blue-50 via-transparent to-transparent">
              <Hero />
            </div>
            <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
