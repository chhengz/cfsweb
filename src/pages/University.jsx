import React from "react";

const LOGO_URL = "https://www.rupp.edu.kh/logo/rupp_logo.png";
const BANNER_URL =
  "https://th.bing.com/th/id/R.31a0c3c3549596171bff665b8c6841de?rik=QuUz0ypFkDnhcQ&riu=http%3a%2f%2fwww.rupp.edu.kh%2fimg%2fslideshow01.jpg&ehk=vN%2bhRvD8a5%2f8B%2b3U5LMnOK0v8tKMDZzUg6iO5mnBJO0%3d&risl=&pid=ImgRaw&r=0";

const BANNER_ALT = "Royal University of Phnom Penh";
const BANNER_TITLE_KH = "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ";
const BANNER_TITLE = "Faculty of Science";
const DEPARTMENT_TITLE = "Department of Computer Science";

const University = () => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className=" w-full   px-8 text-center">
        {/* <div className=''>
        <h1 className='text-4xl font-bold mb-4 text-blue-600'>University</h1>
        <p className='text-gray-700 mb-6'>Royal University of Phnom Penh (RUPP) is the first and largest university in Cambodia, offering a wide range of programs in science, engineering, and technology.</p>
      </div> */}

        <div className=" w-full h-auto flex flex-col items-center justify-center mb-6">
          <div className="w-25 h-25 lg:w-45 lg:h-45 border border-red-500 rounded-full overflow-hidden shadow-lg">
            <img
              src={LOGO_URL}
              alt={BANNER_TITLE}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 lg:pb-6 lg:mt-6">
            <h2 className="text-2xl text-gray-600 font-bold lg:text-4xl ">
              {BANNER_TITLE_KH}
            </h2>
            <h2 className="text-lg text-gray-600  lg:text-2xl lg:mt-2 ">
              {BANNER_ALT}
            </h2>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img
            src={BANNER_URL}
            alt={BANNER_ALT}
            className=" w-full h-55 object-cover"
          />

          <div className=" absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <h2 className="text-white text-4xl font-bold">{BANNER_TITLE}</h2>
            <h3 className="text-white text-2xl font-bold">{DEPARTMENT_TITLE}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default University;
