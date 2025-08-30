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
          <a className="text-white transition-all duration-300 text-xl font-semibold flex items-center">
            <img src="/logo.png" alt="logo" className="w-14 h-14" />
            Percepta
          </a>
        </div>
      </nav>
    </>
  );
};
