import { BadgeCheck, Trash2 } from "lucide-react";
import Header from "./header";
import Info from "./Info";
import { useNavigate } from "react-router";
import ConfirmModal from "./ConfirmModal";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

const Favorite = ({ favorite, setFavorite }) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(null)
  return (
    <main className="h-screen px-2 py-2">
      <AnimatePresence>
        {modal && <ConfirmModal setModal={setModal} user={user} setFavorite={setFavorite} />}
      </AnimatePresence>
      <div className="dark:bg-[#161B22] transition-all duration-500 bg-[#FFFFFF] border border-[#30363d33] gap-2 p-1 rounded-xl h-full w-full flex flex-col">
        <Header />
        <div className="h-9/10 grid grid-cols-4 gap-2 overflow-auto">
          {favorite.map((user) => {
            return (
              <div className="w-full  dark:hover:bg-[#161B22] transition-all duration-500 px-4 py-4 bg-[#F6F8FA] dark:bg-[#161B22] flex flex-col items-center gap-5 rounded-xl border-[#30363d0f] dark:border-[#30363d6b] border h-110">
                <img
                  src={user.avatar_url}
                  className="object-cover w-40 h-40 rounded-full"
                />
                <div className="flex flex-col gap items-center h-[20%] w-full">
                  <h1 className="font-black dark:text-lime-50 text-xl w-full flex items-center justify-center gap-2">
                    {user.name == null ? "Name" : user.name}
                    <BadgeCheck className="dark:text-lime-100" />
                  </h1>
                  <p className="dark:text-white text-sm text-center">
                    @{user.login}
                  </p>
                  <p className="dark:text-white text-sm text-center">
                    {user.bio}
                  </p>
                </div>
                <Info
                  userFollowers={user.followers}
                  userRepo={user.public_repos}
                />
                <div className="flex w-full items-center h-[10%] justify-center gap-2 dark:text-lime-50">
                  <button
                    onClick={() => {
                      navigate("/details/" + user.name);
                    }}
                    className="w-8/10 hover:cursor-pointer rounded-md border border-[#30363d0f] dark:border-[#30363d6b] p-2 text-center"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => {
                     
                      setModal(true);
                      setUser(user)
                    }}
                    className="w-2/10 hover:cursor-pointer transition-all duration-300 hover:text-red-500 rounded-md border border-[#30363d0f] dark:border-[#30363d6b] p-2 items-center justify-center flex"
                  >
                    <Trash2 />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Favorite;
