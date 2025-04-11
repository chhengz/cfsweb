import React from "react";
import useFetchData from "../../hooks/useFetchData";
import ScrollToTopButton from "../customs/scroll/ScrollToTopButton";
import { About, Feature, Process } from "../../pages";
import '../../i18n';
import Loading from "../customs/loading/Loading";

const AboutLayout = () => {
  const { data, loading } = useFetchData();
  return (
    <>
      <ScrollToTopButton />
      <section className="relative overflow-hidden  pb-12 sm:pb-16 sm:pt-14 lg:pb-24 xl:pb-28 xl:pt-30">
        {
          loading ? (
            <Loading />
          ) : (
            <div>
              {/* About Section */}
              <About data={data} />
              {/* Process Section */}
              <Process data={data} />
              {/* Feature Section */}
              <Feature data={data} />
            </div>
          )
        }
      </section>
    </>
  );
};

export default AboutLayout;
