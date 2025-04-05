import { useEffect, useState } from "react";

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;
      const totalScroll = docHeight - winHeight;
      const scrollPercent = (scrollY / totalScroll) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-100">
      <div
        className="h-full bg-blue-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ReadingProgress;
