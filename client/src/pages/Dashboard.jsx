import { Sidebar } from "../components/Sidebar";
import { useState, useEffect } from "react";

export const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#EEEEEE] pl-5 flex flex-col">
      <Sidebar />

      <div className="ml-45 p-8 flex-1 flex flex-col">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Security Dashboard
              </h1>
            </div>
            <div className="text-right">
              <div className="text-2xl font-mono text-gray-800">
                {currentTime.toLocaleTimeString()}
              </div>
              <div className="text-sm text-gray-600">
                {currentTime.toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1"></div>
        <div className="flex justify-center pb-8">
          <button className="rounded-full bg-[#F59E0B] px-4 py-2 text-white font-semibold hover:bg-[#D97706] transition-colors duration-300 cursor-pointer">
            Start Recording
          </button>
        </div>
      </div>
    </div>
  );
};
