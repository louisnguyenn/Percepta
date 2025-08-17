import { Sidebar } from "../components/Sidebar";
import { useState, useEffect } from "react";
import { Camera, AlertCircle, CheckCircle, Loader2, X } from "lucide-react";
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
    <div className="min-h-screen bg-[#EEEEEE] pl-5 flex flex-col relative">
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

        <div className="flex flex-col justify-center items-center flex-1 pb-6">
          <div className="border border-3 border-gray-500 h-130 w-270 relative">
            {error && (
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="w-full max-w-xl bg-red-500/20 border border-red-500/50 rounded-lg p-5 relative">
                  <button
                    onClick={() => setError(null)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition-colors"
                  >
                    <X className="w-5 h-5 cursor-pointer" />
                  </button>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <span className="font-bold text-black">Error</span>
                  </div>
                  <p className="text-black mt-2">{error}</p>
                  <div className="mt-3">
                    <p className="text-black font-semibold">Troubleshooting:</p>
                    <ul className="list-disc list-inside mt-1 space-y-1 text-black">
                      <li>Make sure Flask backend is running (python3 (or python) app.py)</li>
                      <li>Check if camera is available and not used by other apps</li>
                      <li>Verify CORS is enabled in Flask</li>
                      <li>Try refreshing the page</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-auto flex flex-col items-center space-y-4">
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

          <p className="text-gray-500 text-sm">
            Make sure your camera is not being used by other applications
          </p>
        </div>
      </div>

      {result && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="w-full max-w-2xl mx-4 bg-green-500/20 border border-green-500/50 rounded-lg p-4 relative">
            <button
              onClick={() => setResult(null)}
              className="absolute top-2 right-2 text-green-500 hover:text-green-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-green-200 mb-3">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Detection Complete!</span>
            </div>
            <div className="space-y-2 text-white">
              <p>
                <strong>Message:</strong> {result.message}
              </p>
              <p>
                <strong>People Detected:</strong> {result.people_detected}
              </p>
              {result.image_saved_as && (
                <p>
                  <strong>Image Saved:</strong> {result.image_saved_as}
                </p>
              )}
            </div>
            {result.people_detected > 0 && (
              <div className="mt-4 p-3 bg-yellow-500/20 border border-yellow-500/50 rounded">
                <p className="text-yellow-200 font-medium">
                  🚨 Intrusion Detected!
                </p>
                <p className="text-yellow-100 text-sm">
                  {result.people_detected} person(s) detected in the camera
                  feed.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
