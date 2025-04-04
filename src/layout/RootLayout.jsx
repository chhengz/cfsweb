import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
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
