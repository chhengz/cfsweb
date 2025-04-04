import React from "react";

const Feature = () => {
  return (
    <section className="py-6">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <div className="relative inline-block">

        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500 leading-none text-center sm:text-5xl">
          Features of Our Smart Farm
        </h1>
        {/* <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span> */}
        </div>
        <ul className="flex flex-col gap-2 text-2xl font-medium list-disc text-start dark:text-gray-500 px-6 py-4 list-none">
          <li>🐄 Cow Tracking System (GPS)</li>
          <li>🌡️ Environmental Monitoring (Temp, Humidity, Air Quality)</li>
          <li>🥕 Automated Feeding Control</li>
          <li>📶 WiFi / LoRa / GSM Connectivity</li>
          <li>☁️ Cloud-Based Data Logging</li>
          <li>🔔 Real-Time Alerts & Notifications</li>
          <li>🔋 Solar-Powered Operation</li>
          <li>📊 Mobile & Web Dashboard</li>
        </ul>
      </div>
    </section>
  );
};

export default Feature;
