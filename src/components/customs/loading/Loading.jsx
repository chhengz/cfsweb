import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:-.2s]"></div>
          <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:-.4s]"></div>
        </div>
    </div>
  );
};

export default Loading;
