import { Moon, Sun } from "lucide-react";
import useTheme from "../shared/store/useTheme";

const Settings = () => {
  const { theme, setTheme } = useTheme();
  return (
    <main className="h-screen px-2 py-2">
      <div
        className={`dark:bg-[#161B22] border p-2 bg-[#FFFFFF] border-[#D0D7DE] dark:border-[#30363d33] transition-all duration-500 rounded-xl h-full w-full flex flex-col gap-2`}
      >
        <div
          className={`p-3 h-1/10 border flex transition-all duration-500 items-center gap-3 px-2.5 ${theme == "light" ? "bg-[#F6F8FA] border-[#30363d1d]" : "border-[#30363d6b] bg-[#161B22]"}  rounded-xl`}
        >
          <span class="relative flex size-3">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full dark:bg-lime-300 bg-teal-300 opacity-75"></span>
            <span class="relative inline-flex size-3 rounded-full dark:bg-lime-200 bg-teal-200"></span>
          </span>
          <h1 className="text-xl text-teal-500 dark:text-lime-200">Settings</h1>
        </div>
        <div
          className={`p-3 h-1/10 border flex items-center justify-between px-2 ${theme == "light" ? "bg-[#F6F8FA] border-[#30363d1d]" : "border-[#30363d6b] bg-[#161B22]"} transition-all duration-500  rounded-xl`}
        >
          <section className="flex gap-2 items-center justify-center">
            <div
              className={`w-12 h-12 rounded-xl transition-all duration-500 bg-[#FFFFFF] text-teal-500 dark:bg-[#0D1117] dark:text-lime-200  flex items-center justify-center`}
            >
              {theme == "light" ? <Moon size={20} /> : <Sun size={20} />}
            </div>
            <div>
              <h1 className="dark:text-lime-50 text-teal-500">
                {theme == "light" ? "Dark" : "Light"} Mode
              </h1>
              <p className="text-[12px] dark:text-lime-50 text-teal-500">
                Switch to {theme == "light" ? "Dark" : "Light"} Mode
              </p>
            </div>
          </section>
          <button
            onClick={() => {
              setTheme(theme == "light" ? "dark" : "light");
            }}
            className={`w-15.5 hover:cursor-pointer h-8.5 px-[1.7px] flex items-center bg-[#FFFFFF] dark:bg-[#0D1117] rounded-full`}
          >
            <div
              className={`w-7.5 h-7.5 rounded-full text-teal-500 transition-transform duration-500 bg-[#F6F8FA] dark:bg-[#30363d33] dark:text-lime-200 flex items-center justify-center ${theme === "light" ? "translate-x-0" : "translate-x-7"}`}
            >
              {theme == "light" ? <Moon size={17} /> : <Sun size={17} />}
            </div>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Settings;
