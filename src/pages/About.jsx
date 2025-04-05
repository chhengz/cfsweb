import React from "react";
import Feature from "./Feature";
import Process from "./Process";
import { ABOUT_CONTENT } from "../data/data";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-transparent">
      <div class="relative z-0">
        <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <svg
            class="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                width="200"
                height="200"
                x="50%"
                y="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(-100 0)"
              >
                <path d="M.5 200V.5H200" fill="none"></path>
              </pattern>
            </defs>
            <svg x="50%" y="50%" class="overflow-visible fill-blue-50">
              <path
                d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                stroke-width="0"
              ></path>
            </svg>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
            ></rect>
          </svg>
        </div>
      </div>

      <div className="relative z-20 ">
        <div className="w-full pt-15 flex flex-col justify-center ">
          <section className="py-6">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 leading-none text-center sm:text-5xl">
                {ABOUT_CONTENT.title}
              </h1>
              <p className="p-4 text-2xl max-w-2xl text-center dark:text-gray-600">
                {ABOUT_CONTENT.description}
              </p>
            </div>
          </section>
        </div>

        <div className="flex flex-col lg:flex-row justify-center px-10">
          {/* Importance of IoT in Agriculture */}
          {ABOUT_CONTENT.list.map((list, index) => (
            <section key={index} className="py-6">
              <div className="container flex flex-col  p-4 mx-auto space-y-8 sm:p-10">
                <h2 className="text-3xl font-bold text-center sm:text-4xl  text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500 leading-none">
                  {list.title}
                </h2>
                <ul className="list-disc text-xl text-start dark:text-gray-600 p-6">
                  {
                    list.text.map((text, index) => (
                      <li key={index}>{text}</li>
                    ))
                  }
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Feature Page */}
      <Feature />

      {/* How it work */}
      <Process />
    </section>
  );
};

export default About;
