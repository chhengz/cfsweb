import React from 'react';
import Feature from './Feature';
import Team from './Team';
import Process from './Process';

const About = () => {
  return (
    <section className='bg-gradient-to-b from-blue-50 via-transparent'>
      <div class="relative z-0">
        <div
            class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg class="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20" aria-hidden="true">
                <defs>
                    <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%"
                        patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                        <path d="M.5 200V.5H200" fill="none"></path>
                    </pattern>
                </defs>
                <svg x="50%" y="50%" class="overflow-visible fill-blue-50">
                    <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0"></path>
                </svg>
                <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)">
                </rect>
            </svg>
        </div>
    </div>


      <div className="relative z-20 w-full pt-15 flex flex-col justify-center ">
        <section className="py-6">
          <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
    

            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 leading-none text-center sm:text-5xl">
              About the Project
            </h1>
            <p className="text-2xl max-w-2xl text-center dark:text-gray-600">
              This project focuses on building a smart cow farming system using IoT technologies like GPS-enabled collars, environmental sensors, automated feeding systems, and a mobile app for real-time monitoring.
            </p>
          </div>
        </section>
      </div>
        
        <div className='flex flex-col lg:flex-row justify-center px-10'>

        <section className="py-6">
          <div className="container flex flex-col  p-4 mx-auto space-y-8 sm:p-10">
            <h2 className="text-3xl font-bold text-center sm:text-4xl">Why It Matters</h2>
            <ul className="list-disc text-xl text-start dark:text-gray-600">
              <li>Increases productivity</li>
              <li>Enhances animal welfare</li>
              <li>Saves time and labor</li>
              <li>Promotes sustainable farming</li>
            </ul>
          </div>
        </section>

        <section className="py-6">
          <div className="container flex flex-col  p-4 mx-auto space-y-8 sm:p-10">
            <h2 className="text-3xl font-bold text-center sm:text-4xl">Key Technologies</h2>
            <ul className="list-disc text-xl text-start dark:text-gray-600">
              <li>ESP32/ESP8266</li>
              <li>LoRa</li>
              <li>GSM</li>
              <li>Blynk App</li>
              <li>Cloud Services (AWS)</li>
              <li>Solar Panels</li>
            </ul>
          </div>
        </section>
        </div>

        {/* Feature Page */}
        <Feature />

        {/* How it work */}
        <Process />

    </section>
  );
};

export default About;
