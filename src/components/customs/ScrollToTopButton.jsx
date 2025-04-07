import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 50);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-10 right-10 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg z-50 
        transition-all duration-300 ease-in-out cursor-pointer
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTopButton;
// This component will show a button to scroll to the top of the page when the user scrolls down 300px or more.
// The button will be styled with Tailwind CSS classes and will use the ArrowUp icon from lucide-react.
// The button will have a smooth scrolling effect when clicked, and it will be hidden when the user is at the top of the page.
