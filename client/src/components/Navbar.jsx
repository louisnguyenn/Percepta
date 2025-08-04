export const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.95)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          <a
            href="#hero"
            className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-semibold"
          >
            Percepta
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            className="bg-[#05091e] py-2 px-4 rounded-full border border-white/70 text-gray-300 hover:text-white hover:border-white transition-all duration-300"
          ></a>
        </div>
      </nav>
    </>
  );
};
