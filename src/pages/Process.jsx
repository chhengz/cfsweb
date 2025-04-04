import React from "react";

const Process = () => {
  return (
    <div>
      <section className="py-6">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <div className="relative inline-block">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500 leading-none text-center sm:text-5xl">
              How It Works
            </h1>
            {/* <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span> */}
          </div>
          <ul className="flex flex-col gap-2 text-2xl font-medium list-disc text-start dark:text-gray-500 px-6 py-4 list-none">
            <ul>
              <span className="text-blue-600">🔹1. Data Collection:</span>
              <li className="text-xl ml-8">
                Sensors collect temperature, humidity, and air quality.
                GPS-enabled collars track cow movement.
              </li>
            </ul>
            <ul>
              <span className="text-blue-600">🔹2. Data Transmission:</span>
              <li className="text-xl ml-8">
                Devices like ESP32 send data through WiFi, LoRa, or GSM to a
                cloud platform.
              </li>
            </ul>
            <ul>
              <span className="text-blue-600">🔹3. Cloud Integration:</span>
              <li className="text-xl ml-8">
                Data is stored and processed on AWS/Google Cloud, allowing
                real-time monitoring and analytics.
              </li>
            </ul>
            <ul>
              <span className="text-blue-600">🔹4. User Interface:</span>
              <li className="text-xl ml-8">
                A mobile app (Blynk) or website dashboard displays live farm
                conditions and sends alerts.
              </li>
            </ul>
            <ul>
              <span className="text-blue-600">🔹5. Automation:</span>
              <li className="text-xl ml-8">
                Feeding schedules and environment controls can be automated
                using smart actuators.
              </li>
            </ul>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Process;
