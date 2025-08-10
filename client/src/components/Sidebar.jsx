import { Link, useLocation } from 'react-router-dom';

export const Sidebar = () => {
  const location = useLocation();

  const getLinkClassName = (path) => {
    const baseClasses = "flex items-center px-4 py-3 text-gray-800 rounded-lg transition-colors";
    return location.pathname === path
      ? `${baseClasses} bg-[#B0B0B0] font-bold`
      : `${baseClasses} hover:bg-[#B0B0B0]`;
  };

  return (
    <nav className="fixed left-0 top-0 h-screen w-45 bg-[#C6C6C6] shadow-lg">
      <div className="flex flex-col space-y-4 p-4">
        <Link 
          to="/recording" 
          className={getLinkClassName('/recording')}
        >
          <span className="text-lg font-medium">Recording</span>
        </Link>
        
        <Link 
          to="/saved" 
          className={getLinkClassName('/saved')}
        >
          <span className="text-lg font-medium">Saved</span>
        </Link>
        
        <Link 
          to="/" 
          className={getLinkClassName('/')}
        >
          <span className="text-lg font-medium">Go Back</span>
        </Link>
      </div>
    </nav>
  );
};
