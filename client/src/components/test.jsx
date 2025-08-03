import React, { useState } from 'react';
import { Camera, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

const Test = () => {
  const [isDetecting, setIsDetecting] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const testDetection = async () => {
    setIsDetecting(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('http://localhost:5000/api/detect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
      console.error('Detection error:', err);
    } finally {
      setIsDetecting(false);
    }
  };

  const testBackendConnection = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/health');
      if (response.ok) {
        alert('Backend is running!');
      } else {
        alert('Backend responded but with an error');
      }
    } catch (err) {
      alert('Cannot connect to backend. Make sure Flask is running on port 5000');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <Camera className="w-16 h-16 mx-auto mb-4 text-blue-300" />
            <h1 className="text-4xl font-bold text-white mb-2">Percepta</h1>
            <p className="text-blue-200">Intrusion Detection System Test</p>
          </div>

          <div className="space-y-6">
            {/* Connection Test */}
            <div className="bg-white/5 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Connection Test</h2>
              <button
                onClick={testBackendConnection}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Test Backend Connection
              </button>
            </div>

            {/* Detection Test */}
            <div className="bg-white/5 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Detection Test</h2>
              <button
                onClick={testDetection}
                disabled={isDetecting}
                className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isDetecting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Detecting...
                  </>
                ) : (
                  <>
                    <Camera className="w-5 h-5" />
                    Run Detection
                  </>
                )}
              </button>
              <p className="text-blue-200 text-sm mt-2">
                Make sure your camera is not being used by other applications
              </p>
            </div>

            {/* Results Display */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-red-200">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium">Error</span>
                </div>
                <p className="text-red-100 mt-2">{error}</p>
                <div className="mt-3 text-sm text-red-200">
                  <p><strong>Troubleshooting:</strong></p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Make sure Flask backend is running (python app.py)</li>
                    <li>Check if camera is available and not used by other apps</li>
                    <li>Verify CORS is enabled in Flask</li>
                    <li>Try refreshing the page</li>
                  </ul>
                </div>
              </div>
            )}

            {result && (
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-green-200 mb-3">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Detection Complete!</span>
                </div>
                <div className="space-y-2 text-white">
                  <p><strong>Message:</strong> {result.message}</p>
                  <p><strong>People Detected:</strong> {result.people_detected}</p>
                  {result.image_saved_as && (
                    <p><strong>Image Saved:</strong> {result.image_saved_as}</p>
                  )}
                </div>
                {result.people_detected > 0 && (
                  <div className="mt-4 p-3 bg-yellow-500/20 border border-yellow-500/50 rounded">
                    <p className="text-yellow-200 font-medium">🚨 Intrusion Detected!</p>
                    <p className="text-yellow-100 text-sm">
                      {result.people_detected} person(s) detected in the camera feed.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-white/5 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">How to Use:</h3>
            <ol className="list-decimal list-inside space-y-2 text-blue-200">
              <li>Make sure your Flask backend is running on port 5000</li>
              <li>First test backend connection</li>
              <li>Then run detection test</li>
              <li>Stand in front of your camera to test detection</li>
              <li>Check the backend folder for saved detection images</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
