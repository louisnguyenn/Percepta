import { Sidebar } from "../components/Sidebar";
import { useState, useEffect, useRef } from "react";
import {
  Camera,
  AlertCircle,
  CheckCircle,
  Loader2,
  X,
  Play,
  Square,
} from "lucide-react";
import axios from "axios";

export const Live = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDetecting, setIsDetecting] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);

  const startCamera = async () => {
    try {
      setError(null);
      const response = await axios.post(
        "http://localhost:5000/api/start-camera"
      );

      if (response.data.message) {
        setIsCameraOn(true);

        // Debug the videoRef
        console.log("🎬 isCameraOn set to true");
        console.log("📹 videoRef.current:", videoRef.current);

        // Wait for React to render the video element
        setTimeout(() => {
          console.log("⏰ After timeout, videoRef.current:", videoRef.current);

          if (videoRef.current) {
            const videoUrl = `http://localhost:5000/api/video-feed?t=${Date.now()}`;
            console.log("🔗 Setting video src:", videoUrl);

            videoRef.current.src = videoUrl;
            console.log("✅ Video src set to:", videoRef.current.src);

            videoRef.current.load();
            console.log("🔄 Video load() called");
          } else {
            console.error("❌ videoRef.current is still null after timeout!");
          }
        }, 100);
      }
    } catch (err) {
      setError(err.response?.data?.error || err.message);
      console.error("Camera start error:", err);
    }
  };

  const stopCamera = async () => {
    try {
      await axios.post("http://localhost:5000/api/stop-camera");
      setIsCameraOn(false);
      if (videoRef.current) {
        videoRef.current.src = "";
      }
    } catch (err) {
      console.error("Camera stop error:", err);
    }
  };

  const testDetection = async () => {
    setIsDetecting(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post("http://localhost:5000/api/detect");
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.error || err.message);
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

  useEffect(() => {
    return () => {
      if (isCameraOn) {
        stopCamera();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#EEEEEE] pl-5 flex flex-col relative">
      <Sidebar />

      <div className="ml-45 p-8 flex-1 flex flex-col">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Live Recording
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
          <div
            className="border-2 border-gray-400 rounded-lg overflow-hidden bg-black relative"
            style={{ width: "640px", height: "480px" }}
          >
            {isCameraOn ? (
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                controls // ADD THIS temporarily to see video controls
                onError={e => {
                  console.error("Video error:", e.target.error);
                  setError("Failed to load video stream");
                }}
                onLoadStart={() => console.log("🎥 Video loading started")}
                onLoadedData={() => console.log("✅ Video data loaded")}
                onCanPlay={() => console.log("▶️ Video can play")}
                onPlay={() => console.log("🔴 Video playing")}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-800">
                <div className="text-center text-white">
                  <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg mb-2">Camera Off</p>
                  <p className="text-sm opacity-75">
                    Click "Start Camera" to begin monitoring
                  </p>
                </div>
              </div>
            )}

            {/* Camera status indicator */}
            <div className="absolute top-4 right-4">
              <div
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                  isCameraOn
                    ? "bg-green-500/80 text-white"
                    : "bg-red-500/80 text-white"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    isCameraOn ? "bg-white animate-pulse" : "bg-white"
                  }`}
                ></div>
                {isCameraOn ? "LIVE" : "OFFLINE"}
              </div>
            </div>

            {/* Error overlay */}
            {error && (
              <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/50">
                <div className="max-w-md bg-red-500/90 border border-red-500 rounded-lg p-4 text-white">
                  <button
                    onClick={() => setError(null)}
                    className="absolute top-2 right-2 text-white hover:text-red-200 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-bold">Error</span>
                  </div>
                  <p className="text-sm">{error}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-auto flex flex-col items-center space-y-4">
          <div className="flex gap-4">
            <button
              onClick={isCameraOn ? stopCamera : startCamera}
              className={`${
                isCameraOn
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white font-medium py-2 px-4 rounded-lg transition-all transform hover:scale-105 duration-300 flex gap-2 items-center cursor-pointer`}
            >
              {isCameraOn ? (
                <>
                  <Square className="w-5 h-5" />
                  Stop Camera
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  Start Camera
                </>
              )}
            </button>

            <button
              onClick={testDetection}
              disabled={isDetecting || !isCameraOn}
              className="bg-[#F59E0B] hover:bg-[#D97706] disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-all transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed duration-300 flex gap-2 items-center cursor-pointer"
            >
              {isDetecting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Detecting...
                </>
              ) : (
                <>
                  <Camera className="w-5 h-5" />
                  Take Snapshot
                </>
              )}
            </button>
          </div>

          <p className="text-gray-500 text-sm text-center max-w-md">
            Start the camera to see live feed with real-time person detection.
            Use "Take Snapshot" to capture and save detection results.
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
