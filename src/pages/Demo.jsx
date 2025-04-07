import React from 'react'

const VIDEO_ID_URL = "TydfT1uF9_M?si=PVxxgODRjntIk5Wp";
const VIDEO_TITLE = "IoT Project Demo";

const Demo = () => {
  return (
    <div>
      <div className="max-w-3xl w-full  rounded-2xl px-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-indigo-600">Smart IoT Monitoring System</h1>
        <p className="text-gray-700 mb-6">
          This project demonstrates a real-time IoT solution that monitors environmental data using sensors and displays analytics through a connected dashboard.
        </p>
        <div className="aspect-w-16 aspect-h-9 w-full mb-6">
          <iframe
            className="w-full h-full rounded-xl"
            src={`https://www.youtube.com/embed/${VIDEO_ID_URL}`}
            title={VIDEO_TITLE}
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-gray-500 text-sm">Built with ❤️ using ESP32, Node.js, and Firebase.</p>
      </div>
    </div>
  )
}

export default Demo