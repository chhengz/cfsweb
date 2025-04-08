import React from "react";
import { Outlet } from "react-router-dom";

// Components
import Header from "../customs/header/Header";
import ScrollToTop from "../customs/scroll/ScrollToTop";
// import ScrollToTopButton from "../customs/ScrollToTopButton";
import ReadingProgress from "../customs/progressbar/ReadingProgress";

// Pages
import { Hero } from "../../pages";

const RootLayout = () => {
  return (
    <>
      <div>
        <ScrollToTop /> 
        <ReadingProgress />
        {/* <ScrollToTopButton /> */}
        <Header />
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
