import { BadgeCheck, Building2, CalendarClockIcon, Code2, GitPullRequestArrow, Link, MapPin, User, Users } from "lucide-react";
import { useParams } from "react-router";
const ProfilePage = ({ favorite, setFavorite }) => {
  const { user } = useParams();
  const findUser = favorite.find((index) => {
    return index.name == user;
  });
  return (
    <main className="h-screen px-2 py-2 flex flex-col gap-2 overflow-auto">
      <div className="h-3/10 transition-all duration-500 flex items-center text-teal-500 dark:text-lime-50 px-5 gap-8 bg-[#FFFFFF] dark:bg-[#161B22] w-full rounded-xl border border-[#30363d33]">
        <img className='w-40 h-40 outline-2 outline-teal-500/50 dark:outline-lime-200 outline-offset-4 rounded-full' src={findUser.avatar_url} />
        <div className="flex w-full flex-col items-start justify-center gap-1 h-full">
        <div className="flex items-center justify-start w-full gap-3"><h1 className="font-bold dark:text-white text-black text-5xl">{findUser.name}</h1><BadgeCheck className="text-blue-400" /></div>
        <h3>@{findUser.login}</h3>
        <p>{findUser.bio}</p>
        <div className="flex w-full pt-6 items-center justify-between">
          <div className="flex gap-4">
            <MapPin />
            <h3>{findUser.location == null ? 'No Location' : findUser.location}</h3>
          </div>
          |
          <div className="flex gap-4">
            <Building2 />
            <h3>{findUser.company == null ? 'No Company': findUser.company}</h3>
          </div>
          |
          <div className="flex gap-4">
            <Link />
            <a href={findUser.html_url} target='_blank'>{findUser.html_url}</a>
          </div>
          |
          <div className="flex gap-4 items-center justify-center">
            <CalendarClockIcon />
            <p>Joined {new Date(findUser.created_at).toDateString()}</p>
          </div>
          </div>
      </div>
      </div>
      <div className="h-[15%] flex w-full gap-2">
        <div className="h-full items-start py-2 px-2 flex bg-[#FFFFFF] dark:bg-[#161B22] w-full rounded-xl border border-[#30363d33]">
          <div className="w-12.5 h-12.5 bg-[#F6F8FA] text-teal-500 flex items-center justify-center rounded-full">
            <User size={23}/>
          </div>
          <div>
            {/* <p>Followers</p>
            <p>{findUser.followers}</p> */}
          </div>
        </div>
        <div className="h-full py-2 px-2 flex bg-[#FFFFFF] dark:bg-[#161B22] w-full rounded-xl border border-[#30363d33]">
          <div className="w-12.5 h-12.5 bg-[#F6F8FA] text-teal-500 flex items-center justify-center rounded-full">
            <Users size={23}/>
          </div>
          <div>
            {/* <p>Followers</p>
            <p>{findUser.followers}</p> */}
          </div>
        </div>
        <div className="h-full py-2 px-2 flex bg-[#FFFFFF] dark:bg-[#161B22] w-full rounded-xl border border-[#30363d33]">
          <div className="w-12.5 h-12.5 bg-[#F6F8FA] text-teal-500 flex items-center justify-center rounded-full">
            <GitPullRequestArrow size={23} />
          </div>
          <div>
            {/* <p>Followers</p>
            <p>{findUser.followers}</p> */}
          </div>
        </div>
        <div className="h-full py-2 px-2 flex bg-[#FFFFFF] dark:bg-[#161B22] w-full rounded-xl border border-[#30363d33]">
          <div className="w-12.5 h-12.5 bg-[#F6F8FA] text-teal-500 flex items-center justify-center rounded-full">
            <Code2 size={23} />
          </div>
          <div>
            {/* <p>Followers</p>
            <p>{findUser.followers}</p> */}
          </div>
        </div>
      </div>
      <div className="w-full flex h-[35%] gap-2">
        <div className="bg-[#FFFFFF] w-full rounded-xl dark:bg-[#161B22] border border-[#30363d33]"></div>
        <div className="bg-[#FFFFFF] w-full rounded-xl dark:bg-[#161B22] border border-[#30363d33]"></div>
      </div>
      <div className="w-full h-auto bg-amber-50">

      </div>
    </main>
  );
};

export default ProfilePage;
