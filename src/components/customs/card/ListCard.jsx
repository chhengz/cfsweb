import React from "react";

const ListCard = ({ img, name, role }) => {
  return (
    <div className="flex flex-col justify-center m-6 sm:m-6 md:m-8 text-center ">
      <img
        className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
        alt={name}
        src={img}
      />
      <p className="text-xl font-semibold leading-tight">{name}</p>
      <p className="dark:text-gray-600">{role}</p>
    </div>
  );
};

export default ListCard;
