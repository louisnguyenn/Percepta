import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/live");
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-[#FF8C42]/90 border-b border-white/10 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-14">
          <a
            href="#hero"
            className="text-white transition-all duration-300 text-xl font-semibold hover:scale-105 hover:font-bold flex items-center"
          >
            <img
              src="/logo.png"
              alt="logo"
              className="w-14 h-14"
            />
            Percepta
          </a>
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <a
              href="#how-it-works"
              className="text-white transition-all duration-300 hover:scale-105 hover:font-semibold"
            >
              How It Works
            </a>
            <a
              href="#about"
              className="text-white transition-all duration-300 hover:scale-105 hover:font-semibold"
            >
              About
            </a>
            <a
              className="text-white bg-[#e67a32] rounded-full border border-white/70 px-4 py-2 transition-all duration-300 cursor-pointer hover:scale-107 hover:font-semibold hover:border-white"
              onClick={handleGetStarted}
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
