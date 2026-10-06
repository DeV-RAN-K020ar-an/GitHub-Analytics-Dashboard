import { Trash2, X } from "lucide-react";
import { motion } from "motion/react";
import toast, { Toaster } from "react-hot-toast";
const ConfirmModal = ({ setModal, setFavorite, user }) => {
  const handleModal = () => {
    setModal(false);
  };
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#ffffff61] dark:bg-black/70 backdrop-blur-sm"
    >
      <Toaster />
      <motion.div
        initial={{ y: 400, opacity: 0 }}
        transition={{ duration: 0.25 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -400, scale: 0.5, opacity: 0 }}
        className="w-115 flex flex-col items-center justify-center h-110 rounded-2xl  bg-[#F6F8FA] dark:bg-[#161B22] border border-[#30363d11] dark:border-[#30363d33]"
      >
        <section className="h-[8r%] text-black dark:text-lime-50 flex items-center justify-end px-3 pt-4 w-full">
          <button
            onClick={() => {
              handleModal();
            }}
            className="hover:cursor-pointer hover:bg-white dark:hover:bg-black/20 w-8 h-8 flex items-center justify-center duration-300 transition-all rounded-xl"
          >
            <X />
          </button>
        </section>
        <section className="h-[25%] w-full flex items-center justify-center">
          <div className="bg-red-500/10 w-18 h-18 rounded-full items-center justify-center flex">
            <Trash2 className="text-red-500" size={35} />
          </div>
        </section>
        <section className="flex h-[40%] mt-3 flex-col text-center gap-2 items-center justify-center text-black dark:text-lime-50 text-2xl">
          <h1 className="font-black w-90 text-3xl">
            Remove From the Favorites ?
          </h1>
          <p className="text-[18px] font-extralight w-70">
            Are you sure you want to remove this user from your favorite? This
            action cannot be undone.
          </p>
        </section>
        <section className="dark:bg-[#30363d37] bg-[#FFFFFF] mt-3 border border-transparent dark:border-[#30363d33] border- w-8/10 h-[25%] p-2 rounded-lg flex gap-3 items-center justify-start">
          <div>
            <img src={user.avatar_url} className="w-15 h-15 rounded-full"/>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="dark:text-lime-50 text-lg font-bold">{user.name}</h3>
            <p className="dark:text-lime-100">@{user.login}</p>
          </div>
        </section>
        <section className="flex gap-3 h-[30%] items-center justify-center">
          <button
            onClick={() => {
              setModal(false);
            }}
            className="w-45 hover:cursor-pointer dark:text-lime-50 rounded-lg h-12 border border-transparent dark:bg-transparent bg-[#FFFFFF] dark:border-[#30363d33] p-3 flex items-center justify-center"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setTimeout(() => {
                setFavorite((prevState) => {
                  const previous = [...prevState];
                  const deleteIndex = previous.findIndex((i) => {
                    return i.name == user.name;
                  });
                  previous.splice(deleteIndex, 1);
                  return previous;
                });
              }, 1000);
              setModal(false);
            }}
            className="w-45 rounded-lg h-12 bg-red-500 hover:cursor-pointer dark:text-lime-50 p-3 gap-2 flex items-center justify-center"
          >
            <Trash2 />
            Remove
          </button>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default ConfirmModal;
