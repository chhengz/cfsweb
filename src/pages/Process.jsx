import React from "react";
import { PROCESS_CONTENT } from '../data/data'

const Process = () => {
  return (
    <div>
      <section className="py-6">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <div className="relative inline-block">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500 leading-none text-center sm:text-5xl">
              {PROCESS_CONTENT.title}
            </h1>
          </div>

          <ul className="flex flex-col gap-2 text-2xl font-medium list-disc text-start dark:text-gray-500 px-6 py-4 list-none">
            {
              PROCESS_CONTENT.steps.map((step, index) => (
                <div key={index}>
                  <span className="text-blue-600">{step.icon}{" "}{step.title}</span>
                  <li className="text-xl ml-8">
                    {step.description}
                  </li>
                </div>
              ))
            }
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Process;
