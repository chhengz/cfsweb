import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import ScrollToTop from "../customs/ScrollToTop";
import ReadingProgress from "../customs/ReadingProgress";
import { Hero } from "../../pages";
// import ScrollToTopButton from "../customs/ScrollToTopButton";

const RootLayout = () => {
  return (
    <>
      <div>
        <ScrollToTop /> 
        {/* <ScrollToTopButton /> */}
        <ReadingProgress />
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
