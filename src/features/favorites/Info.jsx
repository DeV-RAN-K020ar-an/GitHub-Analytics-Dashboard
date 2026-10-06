import {GitPullRequestArrow, Users} from 'lucide-react'
const Info = ({userFollowers, userRepo}) => {
  return (
    <div className="flex items-center w-full h-[20%] justify-center dark:text-lime-50">
      <div className="flex flex-col w-full items-center gap-1">
        <p>Followers</p>
        <div className="flex items-center gap-3 justify-center">
          <Users />
          {userFollowers}
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-1">
        <p>Repository</p>
        <div className="flex items-center gap-3 justify-center">
          <GitPullRequestArrow />
          {userRepo}
        </div>
      </div>
    </div>
  );
};

export default Info;
