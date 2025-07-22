import React from "react";
import { Link } from "react-router-dom";


const Button = ({ children, onClick }) => {
  return (
    <button
      className="cursor-pointer isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
