import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div class="flex flex-row gap-2">
          <div class="w-4 h-4 rounded-full bg-blue-500 animate-bounce"></div>
          <div class="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:-.2s]"></div>
          <div class="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:-.4s]"></div>
        </div>
    </div>
  );
};

export default Loading;
