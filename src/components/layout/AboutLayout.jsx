import React from "react";
import useFetchData from "../../hooks/useFetchData";
import ScrollToTopButton from "../customs/scroll/ScrollToTopButton";
import { About, Feature, Process } from "../../pages";
import '../../i18n';

const AboutLayout = () => {
  const { data, loading } = useFetchData();
  return (
    <>
      <ScrollToTopButton />
      <section className="relative overflow-hidden  pb-12 sm:pb-16 sm:pt-14 lg:pb-24 xl:pb-28 xl:pt-30">
        {/* About Section */}
        <About data={data} loading={loading} />
        {/* Process Section */}
        <Process data={data} loading={loading} />
        {/* Feature Section */}
        <Feature data={data} loading={loading} />
      </section>
    </>
  );
};

export default AboutLayout;
