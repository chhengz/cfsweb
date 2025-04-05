import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import ScrollToTopButton from "../components/customs/ScrollToTopButton";

import { HOME_CONTENT } from '../data/data'

const Home = () => {
  return (
    <>
      {/* ScrollToTop Button */}
      <ScrollToTopButton />
      {/* Background gradient */}
      <section class="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 sm:pb-16 sm:pt-14 lg:pb-24 xl:pb-28 xl:pt-30">
        {/* Hero section */}
        <Hero />

        {/* Home page */}
        <div class="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
          <div class="pt-28 sm:pt-30 mx-auto max-w-2xl text-center ">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {HOME_CONTENT.title}{" "}<span class="text-blue-600">{HOME_CONTENT.title_span}</span>
            </h1>
            <h2 class="mt-6 text-lg leading-8 text-gray-600">
              {HOME_CONTENT.description}
            </h2>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <Link
                class="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                to="/"
              >
                See More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div class="relative mx-auto mt-10 max-w-lg">
            <img
              class="w-full rounded-2xl border border-gray-100 shadow"
              src={HOME_CONTENT.imgUrl}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
