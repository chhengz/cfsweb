import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
          
    <header className='w-full fixed top-0 left-0 z-50'>
         <div className='flex justify-between items-center w-full'>
             <NavBar />
         </div>
     </header>



    </>
  );
};

export default Header;
