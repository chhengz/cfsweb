import { useTranslation } from "react-i18next";
import ListCard from "../components/customs/card/ListCard";
import Loading from "../components/customs/loading/Loading";
import useFetchData from "../hooks/useFetchData";

// sample IMAGE_URL
const IMG_URL = "https://tse4.mm.bing.net/th/id/OIP.zi4Xf-NhgVgITYi_UTApDAHaHa?rs=1&pid=ImgDetMain";
const LEADER_IMG_URL = "https://cdn.pfps.gg/pfps/1716-sigma.png";

const Team = () => {
  const { t } = useTranslation();
  const { data, loading } = useFetchData();

  return (
    <section className="relative overflow-hidden pb-12 sm:pb-16 sm:pt-14 lg:pb-24 xl:pb-28 xl:pt-30">
      <div className="w-full pt-15 flex flex-col justify-center items-center">
        
        {/* Team Section */}
        {loading ? (
          <Loading />
        ) : (
          <section className="py-6 ">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 leading-relaxed text-center sm:text-5xl">
                {t('MeetOurTeam')}
              </h1>
              <p className="p-4 text-2xl max-w-2xl text-center text-gray-500 dark:text-gray-600">
                {t('TeamDescription')}
              </p>
              {/* Group Members Section for display profile picture and name */}
              
              <div>
                {/* Show Team Leader(s) */}
                {data?.GROUP_MEMBERS?.filter(
                  (member) => member.role === "Team Leader"
                ).map((member, index) => (
                  <ListCard
                    key={`leader-${index}`}
                    img={member.image || LEADER_IMG_URL}
                    name={member.name}
                    role={member.role}
                  />
                ))}
              </div>
              
              <div className="flex flex-row flex-wrap justify-center">
                {/* Show Members */}
                {data?.GROUP_MEMBERS?.filter(
                  (member) => member.role === "Member"
                ).map((member, index) => (
                  <ListCard
                    key={`member-${index}`}
                    img={member.image || IMG_URL}
                    name={member.name}
                    role={member.role}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default Team;
