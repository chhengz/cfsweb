import { useTranslation } from "react-i18next";
import Loading from "../components/customs/loading/Loading";

const About = ({data, loading}) => {
  const { t } = useTranslation();
  return (
    <>
      {/* About Section */}

      <div className="">
        <div className="w-full pt-15 flex flex-col justify-center ">
          <section className="py-6">
            {loading ? (
              <Loading />
            ) : (
              <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                {/**
                 *  not ready for this color from-blue-400 to-indigo-500
                 *  
                 * */}
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 leading-relaxed text-center sm:text-5xl">
                  {t(data?.ABOUT_CONTENT?.title)}
                </h1>
                <p className="p-4 text-2xl max-w-2xl text-center font-medium text-gray-500 dark:text-gray-600">
                  {t(data?.ABOUT_CONTENT?.description)}
                </p>
              </div>
            )}
          </section>
        </div>

        {/* Importance section */}
        <section className="flex flex-col lg:flex-row justify-center px-10">
          {data?.ABOUT_CONTENT?.list.map((list, index) => (
            <div key={index} className="py-6">
              <div className="container flex flex-col p-4 mx-auto space-y-8 sm:p-10">
                <h2 className="text-3xl font-bold text-center sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500 leading-relaxed">
                  {t(list.title)}
                </h2>
                {/* <ul className="list-disc text-xl text-start dark:text-gray-600 p-6"> */}
                <ul className="flex justify-center gap-2 flex-wrap p-6">
                  {list.text.map((text, i) => (
                    <li
                      key={i}
                      className="text-lg bg-gray-100 rounded-full px-3 py-1 font-semibold text-gray-600"
                    >
                      {t(text)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default About;
