import { useRef } from "react";
import { Link } from "react-router-dom";

// custom components
import ScrollToTopButton from "../components/customs/scroll/ScrollToTopButton";

// pages
import Demo from "./Demo";
import University from "./University";

// Define image by URL
const COW_IMAGE_URL = "https://thumbs.dreamstime.com/b/high-tech-cow-farm-managed-artificial-intelligence-dashboard-phrase-ai-cows-high-tech-cow-farm-managed-301843265.jpg";


const Home = () => {
  const demoRef = useRef(null);
  const scrollToPage = () => {
    demoRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      {/* ScrollToTop Button */}
      <ScrollToTopButton />
      <div>
        {/* Home page */}
        <section className="relative overflow-hidden  sm:pb-16 sm:pt-14  xl:pt-30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="pt-28 sm:pt-30 mx-auto max-w-2xl text-center ">
              {/* setLoading for showing up page ontent */}
              <div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-blue-600 sm:text-6xl">
                    Smart Cow Farming System
                  </h1>
                  <h2 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
                    Transforming Traditional Farming with{" "}
                    <span className="text-blue-600">
                      Smart IoT Technology
                    </span>
                  </h2>
                  <h2 className="mt-6 text-xl leading-8 text-gray-600">
                    Monitor cow health, automate feeding, and ensure farm safety — all from your phone!
                  </h2>
                </div>
                {/* Button section click to scroll to demo video */}
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <button
                    className=" cursor-pointer isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    onClick={scrollToPage}
                  >
                    See More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Image section */}
            <div className="relative mx-auto mt-10 max-w-xl">
              <img
                className="w-full shadow rounded-2xl border border-gray-100"
                src={COW_IMAGE_URL}
                alt="Home banner"
              />
            </div>
          </div>
        </section>
        {/* Demo video section */}
        <section
          ref={demoRef}
          className="mt-12 lg:mt-6 pb-12 sm:pb-16  lg:pb-24 xl:pb-28"
        >
          <Demo />
        </section>
        {/* University section */}
        <section className="mt-12 lg:mt-6 pb-12 sm:pb-16  lg:pb-24 xl:pb-28">
          <University />
        </section>
      </div>
    </>
  );
};

export default Home;
