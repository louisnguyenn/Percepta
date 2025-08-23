import { Sidebar } from "../components/Sidebar";
import { useState } from "react";

export const Image = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  return (
    <div className="min-h-screen bg-[#EEEEEE] flex flex-col relative">
      <Sidebar />

      <div className="ml-48 p-8 flex-1 flex flex-col">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Image Scanning
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

        <div className="flex justify-center items-center flex-1">
          <div
            className="border-1 border-gray-400 overflow-hidden"
            style={{ width: "640px", height: "480px" }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-gray-500">
                <p className="text-lg mb-2">Upload Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
