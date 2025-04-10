import { useTranslation } from "react-i18next";
import ListCard from "../components/customs/card/ListCard";
import Loading from "../components/customs/loading/Loading";
import useFetchData from "../hooks/useFetchData";

// sample API URL
const IMG_URL =
  "https://tse4.mm.bing.net/th/id/OIP.zi4Xf-NhgVgITYi_UTApDAHaHa?rs=1&pid=ImgDetMain";

const Team = () => {
  const { t } = useTranslation();
  const { data, loading } = useFetchData();

  return (
    <section className="relative overflow-hidden pb-12 sm:pb-16 sm:pt-14 lg:pb-24 xl:pb-28 xl:pt-30">
      <div className="relative z-20 w-full pt-15 flex flex-col justify-center items-center">
      {/* Team Section */}
        <section className="py-6 ">
          <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 leading-relaxed text-center sm:text-5xl">
              {t("Meet Our Team")}
            </h1>
            <p className="p-4 text-2xl max-w-2xl text-center text-gray-500 dark:text-gray-600">
              {t('TeamDescription')}
            </p>
            {/* Group Members Section for display profile picture and name */}
            <div className="flex flex-row flex-wrap-reverse justify-center">
              {loading ? (
                <Loading />
              ) : (
                data?.GROUP_MEMBERS?.map((member, index) => (
                  <ListCard
                    key={index}
                    img={member.image || IMG_URL}
                    name={member.name}
                    role={member.role}
                  />
                ))
              )}
              {/* {!loading && members.length === 0 ? (
                <p className="text-lg text-red-500">No members found.</p>
              ) : (
                members.map((member, index) => (
                  <ListCard
                    key={index}
                    img={member.image || IMG_URL}
                    name={member.name}
                    role={member.role}
                  />
                ))
              )} */}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Team;
