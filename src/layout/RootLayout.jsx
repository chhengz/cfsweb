import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout = () => {
  return (
    <>
    <ScrollToTop />
      <Header />
      <div className="bg-white ">
        <div className=" w-full  ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
