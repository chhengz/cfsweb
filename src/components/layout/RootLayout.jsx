import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import ScrollToTop from "../ScrollToTop";
import ReadingProgress from "../customs/ReadingProgress";
// import ScrollToTopButton from "../customs/ScrollToTopButton";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      {/* <ScrollToTopButton /> */}
      <ReadingProgress />
      <Header />
      <div className="w-full bg-white ">
          <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
