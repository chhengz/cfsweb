import React from "react";
import Loading from "../components/customs/loading/Loading";
import { useTranslation } from "react-i18next";

const Features = ({ data }) => {
  const { t } = useTranslation();
  return (
    <section className="py-6">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <div className="relative inline-block">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500 leading-relaxed text-center sm:text-5xl">
              {t(data?.FEATURE_CONTENT?.title)}
            </h1>
          </div>
          <ul className="flex flex-col gap-2 text-2xl font-medium text-start text-gray-600 dark:text-gray-600 px-6 py-4 list-none">
            {data?.FEATURE_CONTENT?.features.map((feature, index) => (
              <li key={index} className="flex items-start justify-start">
                <span className="w-10 h-10 flex items-center justify-center -mt-1 p-4 mr-1">
                  {feature.icon}
                </span>
                {t(feature.text)}
              </li>
            ))}
          </ul>
        </div>
    </section>
  );
};

export default Features;
