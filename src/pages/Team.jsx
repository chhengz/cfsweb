import React, { useEffect, useState } from "react";
import ListCard from "../components/customs/card/ListCard";
import axios from "axios";

import { MEMBER_CONTENT } from "../data/data";
import Hero from "./Hero";

// sample API URL
const API_URL = import.meta.env.VITE_API_URL;
const IMG_URL = "https://i.imgflip.com/58o3t5.jpg";

const Team = () => {
  // Fetch data from API
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setMembers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch members:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 sm:pb-16 sm:pt-14 lg:pb-24 xl:pb-28 xl:pt-30">
      {/* Hero Section */}
      <Hero />

      {/* Member Section */}

      <div className="relative z-20 w-full pt-15 flex flex-col justify-center items-center">
        <section className="py-6 ">
          <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 leading-none text-center sm:text-5xl">
              {MEMBER_CONTENT.title}
            </h1>
            <p className="p-4 text-2xl max-w-2xl text-center dark:text-gray-600">
              At a assumenda quas cum earum ut itaque commodi saepe rem
              aspernatur quam natus quis nihil quod, hic explicabo doloribus
              magnam neque, exercitationem eius sunt!
            </p>
            <div className="flex flex-row flex-wrap-reverse justify-center">
              {loading ? (
                <h1 className="text-2xl font-light">Loading...</h1>
              ) : (
                members.map((member, index) => (
                  <ListCard
                    key={index}
                    img={member.image || IMG_URL}
                    name={member.name}
                    role={member.role}
                  />
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Team;
