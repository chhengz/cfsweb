import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import Loading from "../components/customs/loading/Loading";
import { useTranslation } from "react-i18next";

const Process = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="">
      <section className="py-6 max-w-xl mx-auto">
          <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
            <div className="relative inline-block">
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500 leading-relaxed text-center sm:text-5xl">
                {t(data?.PROCESS_CONTENT?.title)}
              </h1>
            </div>
            <ul className="flex flex-col text-2xl font-medium text-start text-gray-500 dark:text-gray-500 px-6 py-4 list-none">
              {data?.PROCESS_CONTENT?.steps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
                        <FaAngleDown className="h-6 w-6 text-blue-800" />
                      </div>
                    </div>
                    {/* no display the line at the last index */}
                    {index < data?.PROCESS_CONTENT?.steps.length - 1 && (
                      <div className="h-full w-px bg-gray-400 dark:bg-slate-500"></div>
                    )}
                  </div>
                  <div className="pt-1 pb-8">
                    <p className="mb-2 text-xl font-bold text-blue-600 ">
                      {step.icon} {t(step.title)}
                    </p>
                    <p className="text-xl ">{t(step.description)}</p>
                  </div>
                </div>
              ))}
            </ul>
          </div>
      </section>
    </div>
  );
};

export default Process;
