import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
          <Header />
      <div className="bg-slate-200">
          <div className=" w-full h-screen container  mx-auto  ">
          <Outlet />
          </div>
      </div>
    </>
  );
};

export default RootLayout;
