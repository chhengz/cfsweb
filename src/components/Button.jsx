import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <button
      className=" cursor-pointer  bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500"
    >
      <Link to={'/contact'}>{props.children}</Link>
    </button>
  );
};

export default Button;
