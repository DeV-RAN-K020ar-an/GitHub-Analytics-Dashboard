import {MapPin, CalendarClock, Building2} from 'lucide-react'
import { BsTwitterX } from "react-icons/bs";
const UserInformation = ({data}) => {
  const {location, company, twitter_username, created_at} = data  
  return (
    <div className="text-teal-500 dark:text-lime-50 text-md gap-6 items-start justify-start flex flex-col">
      <div className="flex items-start gap-3 justify-start">
        <MapPin />
        <p>{location == null ? "Not Available" : location}</p>
      </div>
      <div className="flex items-start gap-3 justify-center">
        <Building2 />
        <p>{company == null ? "No Company" : `${company}`}</p>
      </div>
      <div className="flex items-center gap-4 justify-center">
        <BsTwitterX size={20} />
        <a
          href={
            twitter_username == null
              ? undefined
              : `https://x.com/${twitter_username}`
          }
        >
          {twitter_username == null
            ? "Not Available"
            : twitter_username}
        </a>
      </div>
      <div className="flex items-center gap-3 justify-center">
        <CalendarClock />
        <p>Joined {new Date(created_at).toDateString()}</p>
      </div>
    </div>
  );
};

export default UserInformation;
