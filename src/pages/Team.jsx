import React, { useEffect, useState } from "react";
import ListCard from "../components/ListCard";
import axios from "axios";

import {MEMBER_CONTENT} from '../data/data'

// sample API URL
const API_URL = import.meta.env.VITE_API_URL;
const IMG_URL = 'https://i.pinimg.com/736x/0f/b9/f0/0fb9f0d29a9b43866cf7c2cc12b3fd3f.jpg';


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
      <div className="relative z-10">
        <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <svg
            className="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                width="200"
                height="200"
                x="50%"
                y="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(-100 0)"
              >
                <path d="M.5 200V.5H200" fill="none"></path>
              </pattern>
            </defs>
            <svg x="50%" y="50%" className="overflow-visible fill-blue-50">
              <path
                d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                strokeWidth="0"
              ></path>
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
            ></rect>
          </svg>
        </div>
      </div>
      <div className="relative z-20 w-full pt-15 flex flex-col justify-center items-center">
        <section className="py-6 ">
          <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 leading-none text-center sm:text-5xl">
              {MEMBER_CONTENT.title}
            </h1>
            <p className="max-w-2xl text-center dark:text-gray-600">
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
