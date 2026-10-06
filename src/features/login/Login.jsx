import { motion } from "motion/react";
import {
  Bookmark,
  ChartNoAxesColumn,
  Code2,
  Heart,
  Moon,
  Search,
  Sun,
  User,
  UserCircleIcon,
} from "lucide-react";
import useTheme from "../shared/store/useTheme";
const Login = () => {
  const {theme, setTheme} = useTheme()
  return (
    //  bg-[#F6F8FA]
    <main className={`${theme} h-screen bg-[#FFFFFF] dark:bg-[#0D1117] gap-1 flex flex-col items-start justify-between p-3 px-3`}>
      <div className="h-[8%] rounded-lg w-full gap-2 flex justify-between items-center">
        <div className="flex items-center gap-2 px-20">
        <div className="w-10 h-10 flex items-center justify-center drop-shadow-sm drop-shadow-teal-200/70 dark:drop-shadow-lime-300/70 bg-teal-400 dark:bg-lime-200 dark:text-green-950 p-2 rounded-lg">
          <ChartNoAxesColumn />
        </div>
        <motion.h1
          className="dark:text-lime-50 text-2xl"
          initial={{ opacity: 0, x: -10 }}
          transition={{ delay: 0.6 }}
          animate={{ opacity: 1, x: 0 }}
        >
          GitHub <span className="dark:text-lime-200 text-teal-200">Analytics Dashboard</span>
        </motion.h1>
        </div>
        <div className="text-lime-50 px-2 hover:rotate-6">
          <button onClick={() => {
            setTheme(theme == "light" ? "dark" : "light");
          }}>{theme == 'light'? <Moon /> : <Sun /> }</button>
        </div>
      </div>
      <div className="flex h-[92%] w-full items-center">
        <div className="w-7/10 p-8 gap-3 px-20 h-[95%] flex flex-col">
          <h1 className="text-6xl dark:text-lime-50 w-full">
            Track. Explore.
            <br />
            <span className="dark:text-lime-200">Build Better</span>
          </h1>
          <p className="dark:text-lime-50 text-lg w-full">
            Get insights, explore users, and manage
            <br /> your favorite GitHub Profiles - all in one
            <br /> powerful dashboard.
          </p>
          <div className="flex pt-5 gap-8 items-center">
            <div className="flex flex-col items-start w-25 justify-start gap-2 border-r p-2 dark:border-amber-100/10">
              <Search className="dark:text-lime-200" />
              <p className="dark:text-lime-50">
                Search
                <br />
                Users
              </p>
            </div>
            <div className="flex flex-col items-start w-25 justify-start gap-2 border-r p-2 dark:border-amber-100/10">
              <Bookmark className="dark:text-lime-200" />
              <p className="dark:text-lime-50">
                Save
                <br />
                Favroites
              </p>
            </div>
            <div className="flex flex-col items-start w-25 justify-center gap-2 border-r p-2 dark:border-amber-100/10">
              <ChartNoAxesColumn className="dark:text-lime-200" />
              <p className="dark:text-lime-50">
                View
                <br />
                Analytics
              </p>
            </div>
            <div className="flex flex-col items-start w-25 justify-start gap-2 p-2 ">
              <Code2 className="dark:text-lime-200" />
              <p className="dark:text-lime-50">
                Explore
                <br />
                Repositories
              </p>
            </div>
          </div>
          <div className="mt-51">
            <h1 className="flex items-center gap-2 dark:text-lime-200">
              <Heart />
              Built for Developer. Powered By Ahmad Erfan Yousofi
            </h1>
          </div>
        </div>
        <div className="w-3/10 p-10 flex flex-col items-center justify-start h-[95%] text-lime-50 rounded-lg bg-[#F6F8FA] dark:bg-[#161B22] border border-[#30363d0e] dark:border-[#30363d33]">
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="w-12 h-12 flex items-center justify-center drop-shadow-sm dark:drop-shadow-lime-300/70 bg-teal-400 dark:bg-lime-200 dark:text-green-950 p-2 rounded-lg">
              <ChartNoAxesColumn size={30} />
            </div>
            <h1 className="text-4xl text-black">Welcome <span className="dark:text-lime-200">Back</span></h1>
            <p className="text-xl text-center text-gray-600">Sign in to continue to your GitHub Analytics Dashboard.</p>
            <div className="flex mt-8 bg-[#FFFFFF] dark:bg-[#0D1117] dark:text-lime-50 text-black w-full p-3 rounded-md items-center justify-center gap-2">
              <User />
              <input className="outline-none w-full placeholder:text-black dark:placeholder:text-lime-50 p-0.5  h-full" placeholder="GitHub Username" />
            </div>
           
            <div className="w-full">
              <button className="w-full hover:cursor-pointer h-10 flex items-center justify-center drop-shadow-sm drop-shado-teal-200 dark:drop-shadow-lime-300/70 bg-teal-400 dark:bg-lime-200 text-green-950 p-2 rounded-lg">Let's Go</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
