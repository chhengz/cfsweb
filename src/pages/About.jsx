import React from "react";
import Feature from "./Feature";
import Process from "./Process";
import { ABOUT_CONTENT } from "../data/data";
import Hero from "./Hero";
import ScrollToTopButton from "../components/customs/ScrollToTopButton";

const About = () => {
  return (
    <>
      <ScrollToTopButton />

      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 sm:pb-16 sm:pt-14 lg:pb-24 xl:pb-28 xl:pt-30">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
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
                    {list.text.map((text, index) => (
                      <li key={index}>{text}</li>
                    ))}
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
    </>
  );
};

export default About;
