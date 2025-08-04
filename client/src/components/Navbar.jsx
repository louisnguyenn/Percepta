export const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-[#FF8C42]/90 border-b border-white/10 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-14">
          <a
            href="#hero"
            className="text-white transition-colors duration-300 text-lg font-semibold"
          >
            Percepta
          </a>
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <a
              href="#how-it-works"
              className="text-white transition-colors duration-300"
            >
              How It Works
            </a>
            <a
              href="#about"
              className="text-white transition-colors duration-300"
            >
              About
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
