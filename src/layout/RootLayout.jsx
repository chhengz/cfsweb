import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
      <div className="w-full bg-slate-200">
        <div className="">
          <Header />
        </div>
        <div className="container mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
