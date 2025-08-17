import { Sidebar } from "../components/Sidebar";
import { useState, useEffect } from "react";
import { Camera, AlertCircle, CheckCircle, Loader2 } from "lucide-react";
import axios from "axios";

export const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDetecting, setIsDetecting] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const testDetection = async () => {
    setIsDetecting(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post("http://localhost:5000/api/detect");

      // axios automatically parses JSON and puts it in response.data
      setResult(response.data);
    } catch (err) {
      setError(err.message);
      console.error("Detection error:", err);
    } finally {
      setIsDetecting(false);
    }
  };

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

        <div className="flex flex-col justify-center items-center">
          <div className="border border-3 border-gray-500 h-130 w-270"></div>
        </div>

        <div className="flex-1"></div>
        <div className="flex justify-center pb-3">
          <button
            onClick={testDetection}
            disabled={isDetecting}
            className="bg-[#F59E0B] disabled:from-gray-600 disabled:to-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-all transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed duration-300 cursor-pointer flex gap-2"
          >
            {isDetecting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Detecting...
              </>
            ) : (
              <>
                <Camera className="w-5 h-5" />
                Start Recording
              </>
            )}
          </button>
        </div>
        <p className="text-center flex flex-col text-gray-500 text-sm mt-2">
          Make sure your camera is not being used by other applications
        </p>
      </div>
    </div>
  );
};
