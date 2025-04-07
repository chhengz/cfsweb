import React from "react";
import Hero from "../../pages/Hero";
import { About, Feature, Process } from "../../pages";
import ScrollToTopButton from "../customs/ScrollToTopButton";

const AboutLayout = () => {
  return (
    <>
      <ScrollToTopButton />
      <section className="relative overflow-hidden  pb-12 sm:pb-16 sm:pt-14 lg:pb-24 xl:pb-28 xl:pt-30">
        
        {/* About Section */}
        <About />
        {/* How it work */}
        <Process />
        {/* Feature Page */}
        <Feature />
      </section>
    </>
  );
};

export default AboutLayout;
