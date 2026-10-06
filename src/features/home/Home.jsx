import {
  BadgeCheck,
  Code2,
  GitPullRequestArrow,
  Link,
  PencilLine,
  Search,
  Star,
  User,
  Users,
} from "lucide-react";

import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ScaleLoader } from "react-spinners";
import UserInformation from "./UserInformation";
import useUsers from "../shared/store/userUsers";
import useTheme from "../shared/store/useTheme";
import toast, { Toaster } from "react-hot-toast";

const Home = ({ favorite, setFavorite }) => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, getValues } = useForm();
  const { data, setData } = useUsers();
  const { theme } = useTheme();

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleData = () => {
    let newOBJ = getValues();
    if (newOBJ.name != "") {
      setLoading(true);
      axios
        .get(`https://api.github.com/users/${username}`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        })
        .then((res) => setData(res.data))
        .finally(() => setLoading(false));
    }
  };

  const userInfo = [
    {
      icon: <GitPullRequestArrow />,
      name: "Repositories",
      num: data.public_repos,
    },
    {
      icon: <Users />,
      name: "Followers",
      num: data.followers,
    },
    {
      icon: <User />,
      name: "Following",
      num: data.following,
    },
    {
      icon: <Code2 />,
      name: "Gists",
      num: data.public_gists,
    },
  ];

  const findUser = () => {
    const find = favorite.find((user) => {
      return user.name == data.name;
    });
    return find;
  };
  return (
    <main className="h-screen flex flex-col gap-2 px-2 py-2">
      <Toaster reverseOrder={false} />
      <div className="h-[11.5%] transition-all duration-500 w-full dark:text-lime-100 text-teal-500 bg-[#FFFFFF] dark:bg-[#161B22] border border-[#30363d33] rounded-xl flex items-center justify-between px-3">
        <div className="flex items-center justify-start gap-2 w-[95%] pr-8">
          <Search />
          <input
            {...register("name")}
            onChange={handleChange}
            className="h-10 w-full outline-none pl-2 pt-0.5 placeholder:text-teal-500 dark:placeholder:text-lime-100"
            placeholder="Search GitHub Username"
          />
        </div>
        <button
          onClick={handleData}
          className="w-[8%] border flex items-center justify-center hover:cursor-pointer bg-[#F6F8FA] dark:bg-[#30363d37] border-[#30363d0f] dark:border-[#30363d33] hover:border-[#30363d26] dark:hover:border-[#30363d94] transition-all duration-500 p-3 rounded-lg"
        >
          Search
        </button>
      </div>
      <div className="h-[88.5%] transition-all duration-500 bg-[#FFFFFF] dark:bg-[#161B22] border border-[#30363d33] rounded-xl p-4 flex flex-col justify-between">
        {loading ? (
          <div className="h-full w-full flex items-center justify-center">
            <ScaleLoader
              color={`${theme == "light" ? "#00bba7" : "#ecfcca"}`}
              height={50}
            />
          </div>
        ) : (
          <>
            <div className="fixed pt-1.5 right-5 text-teal-500 dark:text-lime-100">
              <button
                onClick={() => {
                  data.name == "The Octocat" || findUser()
                    ? data.name != "The Octocat"
                      ? toast.error(`${data.name} Already In Your Favorite`, {
                          style: {
                            borderRadius: "10px",
                            backgroundColor:
                              theme == "light" ? "#F6F8FA" : "#30363d37",
                            color:
                              theme == "light"
                                ? "oklch(70.4% 0.14 182.503)"
                                : "oklch(96.7% 0.067 122.328)",
                          },
                          iconTheme: {
                            primary: theme == "light" ? "#fb2c36" : "#fb2c36",
                            secondary: theme == "light" ? "white" : "black",
                          },
                        })
                      : null
                    : setTimeout(() => {
                        setFavorite((prevState) => {
                          return [...prevState, data];
                        });
                        toast.success(`${data.name} Added to Favorite`, {
                          style: {
                            borderRadius: "10px",
                            backgroundColor:
                              theme == "light" ? "#F6F8FA" : "#30363d37",
                            color:
                              theme == "light"
                                ? "oklch(70.4% 0.14 182.503)"
                                : "oklch(96.7% 0.067 122.328)",
                          },
                          iconTheme: {
                            primary:
                              theme == "light"
                                ? "oklch(70.4% 0.14 182.503)"
                                : "oklch(93.8% 0.127 124.321)",
                            secondary: theme == "light" ? "white" : "black",
                          },
                        });
                      }, 500);
                }}
                className="flex border gap-3 px-3 items-center justify-center duration-500 transition-all  hover:cursor-pointer bg-[#F6F8FA] dark:bg-[#30363d37] border-[#30363d0f] dark:border-[#30363d33] hover:border-[#30363d26] dark:hover:border-[#30363d94] p-3 rounded-lg"
              >
                <Star />
                Add to Favorites
              </button>
            </div>
            <div className="flex items-start gap-8">
              <img
                src={data.avatar_url}
                className="w-50 h-50 object-cover rounded-full"
              />
              <div className="flex flex-col py-2 gap-10">
                <div>
                  <h1 className="text-5xl dark:text-white font-bold flex gap-5 items-center justify-start">
                    {data.name} <BadgeCheck className="text-blue-400" />
                  </h1>
                  <p className="dark:text-gray-200 text-gray-300 text-md pt-2 px-2">
                    {data.login} • GitHub Member
                  </p>
                </div>
                <div className="flex flex-col justify-start items-start gap-5">
                  <div>
                    <p className="dark:text-lime-50 text-teal-500 flex items-center gap-3 justify-start">
                      <PencilLine size={20} />
                      {data.bio == null ? "This Profile has no bio" : data.bio}
                    </p>
                  </div>
                  <div className="flex items-center text-teal-500 dark:text-lime-50 justify-start gap-3">
                    <Link size={20} />
                    <a href={data.html_url}>{data.html_url}</a>
                  </div>
                </div>
                <UserInformation data={data} />
              </div>
            </div>
            <div className="w-full h-50 flex items-end justify-around px-2 py-2 gap-4">
              {userInfo.map((info) => {
                return (
                  <div className="w-full dark:hover:bg-[#30363d6b] transition-all duration-500 px-4 py-4 bg-[#F6F8FA] dark:bg-[#30363d37] flex justify-between rounded-xl border-[#30363d0f] dark:border-[#30363d33] border h-7/10">
                    <div className="flex flex-col gap-5">
                      <h1 className="dark:text-gray-300 text-[22px]">
                        {info.name}
                      </h1>
                      <p className="font-black dark:text-white text-4xl">
                        {info.num}
                      </p>
                    </div>
                    <div className="text-teal-500 dark:text-lime-50 pt-1.5 bg-[#FFFFFF] dark:bg-[#161B22] p-2 rounded-xl h-10">
                      {info.icon}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
