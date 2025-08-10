import { Sidebar } from "../components/Sidebar";
import { useState, useEffect } from "react";

export const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemStatus, setSystemStatus] = useState("Active");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const recentAlerts = [
    {
      time: "14:32",
      type: "Motion",
      location: "Front Door",
      severity: "Medium",
    },
    { time: "13:45", type: "Door", location: "Back Entrance", severity: "Low" },
    { time: "12:18", type: "Motion", location: "Garage", severity: "High" },
    { time: "11:56", type: "System", location: "Camera 5", severity: "Low" },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "High":
        return "text-red-600 bg-red-50";
      case "Medium":
        return "text-orange-600 bg-orange-50";
      case "Low":
        return "text-blue-600 bg-blue-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-[#EEEEEE] p-5">
      <Sidebar />

      <div className="ml-45 p-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Security Dashboard
              </h1>
              <p className="text-gray-600">Monitor your home security system</p>
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

        <div className="mb-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-green-800">
                System Status: {systemStatus}
              </span>
            </div>
            <span className="text-sm text-green-600">
              All systems operational
            </span>
          </div>
        </div>

        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Recent Alerts
              </h2>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="space-y-3">
              {recentAlerts.map((alert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-sm text-gray-600">{alert.time}</div>
                    <div className="font-medium text-gray-800">
                      {alert.type}
                    </div>
                    <div className="text-sm text-gray-600">
                      {alert.location}
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(
                      alert.severity
                    )}`}
                  >
                    {alert.severity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
