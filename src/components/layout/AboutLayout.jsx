import React from "react";
import Hero from "../../pages/Hero";
import { About, Feature, Process } from "../../pages";
import ScrollToTopButton from "../customs/scroll/ScrollToTopButton";

// fetch data from api
import useFetchData from "../../hooks/useFetchData";

const AboutLayout = () => {
  const { data, loading } = useFetchData();
  return (
    <>
      <ScrollToTopButton />
      <section className="relative overflow-hidden  pb-12 sm:pb-16 sm:pt-14 lg:pb-24 xl:pb-28 xl:pt-30">
        {/* About Section */}
        <About data={data} loading={loading} />
        {/* How it work */}
        <Process data={data} loading={loading} />
        {/* Feature Page */}
        <Feature data={data} loading={loading} />
      </section>
    </>
  );
};

export default AboutLayout;
