import React from "react";
import ListCard from "../components/ListCard";

const About = () => {
  return (
    <div className="w-full pt-25 flex flex-col justify-center items-center">
      <section className="py-6 ">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
            Our team
          </h1>
          <p className="max-w-2xl text-center dark:text-gray-600">
            At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur
            quam natus quis nihil quod, hic explicabo doloribus magnam neque,
            exercitationem eius sunt!
          </p>
          <div className="flex flex-row flex-wrap-reverse justify-center">
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
