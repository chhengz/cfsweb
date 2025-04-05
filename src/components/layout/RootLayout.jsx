import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import ScrollToTop from "../ScrollToTop";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="w-full bg-white ">
          <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
