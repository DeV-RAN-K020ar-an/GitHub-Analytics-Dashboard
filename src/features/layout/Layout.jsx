import {
  ArrowLeftRight,
  Bookmark,
  ChartNoAxesColumn,
  // GitCompareArrows,
  Home,
  Info,
  Moon,
  PanelLeftCloseIcon,
  PanelLeftOpenIcon,
  Search,
  Settings,
  Sun,
} from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Tooltip } from "react-tooltip";
import { motion } from "motion/react";
import useTheme from "../shared/store/useTheme";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const navigationBar = [
    {
      name: "Home",
      icon: <Home />,
      link: "/",
    },
    {
      name: "Search",
      icon: <Search />,
      link: "/search",
    },
    {
      name: "Compare",
      icon: <ArrowLeftRight />,
      link: "/compare",
    },
    {
      name: "Favorites",
      icon: <Bookmark />,
      link: "/favorite",
    },
    {
      name: "Details",
      icon: <Info />,
      link: "/details/:user",
      disabled: true
    },
    {
      name: "Settings",
      icon: <Settings />,
      link: "/settings",
    },
  ];
  const [collapse, setCollapse] = useState(false);
  const { theme, setTheme } = useTheme();
  let header =
    collapse == false
      ? "justify-start p-10 px-3.5 gap-3 h-1/10"
      : "justify-center h-[16%]";
  return (
    <main className={`h-screen flex ${theme}`}>
      <aside
        className={`${collapse == false ? "w-[25%]" : "w-[4%]"} transition-all duration-500 h-full bg-[#FFFFFF] dark:bg-[#161B22] ${theme == "light" ? "border-r border-[#D0D7DE]" : "border-r border-[#30363d33] "} flex flex-col gap-8`}
      >
        <div className={`${header} flex items-center w-full`}>
          <div
            className="bg-teal-500 text-lime-50 dark:bg-lime-200 dark:text-green-950  p-2 rounded-lg"
            id="icon"
          >
            <ChartNoAxesColumn />
          </div>
          {collapse == false ? (
            <motion.h1
              className="pt-1 text-teal-500 dark:text-lime-100 text-xl"
              initial={{ opacity: 0, x: -10 }}
              transition={{ delay: 0.6 }}
              animate={{ opacity: 1, x: 0 }}
            >
              GitHub Analytics Dashboard
            </motion.h1>
          ) : null}
        </div>
        <div className="h-[95%] flex flex-col gap-4">
          {collapse == false ? (
            <h1 className="px-5 text-sm font-thin text-[#161B22] dark:text-lime-50/50">
              Menu
            </h1>
          ) : null}

          <div className="flex flex-col items-center justify-center gap-3 text-[#161B22] dark:text-lime-50">
            {navigationBar.map((nav) => {
              const { pathname } = useLocation();
              let isDisabled = nav.disabled
              let color =
                pathname == nav.link
                  ? "text-teal-500 dark:text-lime-200 px-5"
                  : `${theme == "light" ? "hover:text-teal-500" : "hover:text-lime-200"} text-[#0D1117] dark:text-lime-50 px-5`; // border-l-6 border-lime-200
              return (
                <button
                  onClick={() => navigate(`${nav.link}`)}
                  id="my-anchor-element"
                  data-tooltip-content={nav.name}
                  disabled={isDisabled}
                  className={`flex items-center ${collapse == false ? `${color} gap-5 w-full` : `justify-center ${theme == "light" ? "hover:bg-teal-500 hover:text-lime-50" : "hover:bg-lime-200 hover:text-green-950 "} rounded-lg`}  outline-none hover:cursor-pointer transition-all duration-200 p-2.75`}
                >
                  {collapse == false ? null : (
                    <Tooltip
                      style={{
                        backgroundColor: theme == "light" ? "#46ecd5" : "#f7fee7",
                        color: theme == "light" ? "#f7fee7" : "#032e15",
                        fontWeight: "bold",
                      }}
                      anchorSelect="#my-anchor-element"
                      content={"data-tooltip-content"}
                    />
                  )}
                  {nav.icon}
                  <h1>
                    {collapse == false ? nav.name : null}
                  </h1>
                </button>
              );
            })}
          </div>
        </div>
        <button
          className={`dark:text-lime-50 text-[#161B22] h-[5%] flex items-center hover:cursor-pointer ${collapse == false ? "justifiy-start px-6" : "justify-center"} pb-10`}
          onClick={() => {
            setCollapse(collapse == false ? true : false);
          }}
        >
          {collapse == false ? <PanelLeftCloseIcon /> : <PanelLeftOpenIcon />}
        </button>
        <button
          className={`dark:text-lime-50 text-[#161B22] h-[5%] flex items-center hover:cursor-pointer ${collapse == false ? "justifiy-start px-6" : "justify-center"} pb-10`}
          onClick={() => {
            setTheme(theme == "light" ? "dark" : "light");
          }}
        >
          {theme == "light" ? <Sun /> : <Moon />}
        </button>
        {/* <section className="flex items-center justify-center w-full p-2 px-0.5">
        <div className="w-[93%] h-12 rounded-md border border-white/7 bg-[#0D1117]"></div>

        </section> */}
      </aside>
      <div className={`h-full ${collapse == false ? "w-full" : "w-full"}`}>
        <section className="h-full w-full bg-[#F6F8FA] dark:bg-[#0D1117] transition-all duration-500">
          {children}
        </section>
      </div>
    </main>
  );
};

export default Layout;
