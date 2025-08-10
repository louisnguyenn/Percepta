import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();

  const getLinkClassName = (path) => {
    const baseClasses =
      "flex items-center px-4 py-2 text-slate-700 transition-all duration-300 ease-in-out transform hover:scale-[1.04] hover:shadow-md group relative overflow-hidden";
    return location.pathname === path
      ? `${baseClasses} bg-[#B0B0B0] font-bold shadow-lg scale-[1.02]`
      : `${baseClasses} hover:bg-[#B0B0B0]`;
  };

  return (
    <nav className="fixed left-0 top-0 h-screen w-52 py-2 bg-[#C6C6C6] shadow-2xl border-r border-gray-300/20">
      <div className="flex flex-col space-y-3 p-6">
        <Link to="/dashboard" className={getLinkClassName("/dashboard")}>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-orange-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="text-lg font-medium tracking-wide">Dashboard</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>

        <Link to="/recording" className={getLinkClassName("/recording")}>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-red-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="text-lg font-medium tracking-wide">Recording</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>

        <Link to="/saved" className={getLinkClassName("/saved")}>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-green-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="text-lg font-medium tracking-wide">Saved</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>

        <Link to="/" className={getLinkClassName("/")}>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="text-lg font-medium tracking-wide">Go Back</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
      </div>
    </nav>
  );
};
