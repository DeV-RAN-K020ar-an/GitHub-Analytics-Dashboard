const Header = () => {
  return (
    <header className="h-1/10 transition-all duration-500 border flex items-center justify-start px-2 border-[#30363d0f] dark:border-[#30363d6b] dark:bg-[#161B22] bg-[#F6F8FA] rounded-xl">
      <span class="relative flex size-3">
        <span class="absolute inline-flex h-full w-full animate-ping rounded-full dark:bg-lime-300 bg-teal-300 opacity-75"></span>
        <span class="relative inline-flex size-3 rounded-full dark:bg-lime-200 bg-teal-200"></span>
      </span>
    </header>
  );
};

export default Header;
