import StarBorder from "../StarBorder";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Shield, Eye, Users, AlertTriangle } from "lucide-react";
import CountUp from "../CountUp";

export const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/dashboard");
    console.log("Get Started clicked!");
  };

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 text-white text-center bg-[#2a2a2a]"
    >
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mt-15 mb-12">
          Percepta
        </h1>
        <p className="text-sm md:text-base leading-relaxed mb-4">
          Percepta is an intelligent security application that uses OpenCV to
          detect human presence in real time and automatically capture images
          upon detection.
        </p>
      </div>

      <div className="mt-12">
        <StarBorder
          as="button"
          color="#F59E0B"
          speed="4s"
          onClick={handleGetStarted}
        >
          <div className="font-bold flex items-center gap-2 cursor-pointer">
            Get Started <ArrowRight size={18} />
          </div>
        </StarBorder>

        <div className="mt-16 w-full max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 p-2 bg-white/10 rounded-full">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  <CountUp
                    from={0}
                    to={247}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                </div>
                <div className="text-sm text-gray-300 font-medium">
                  Threats Detected
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 p-2 bg-white/10 rounded-full">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  <CountUp
                    from={0}
                    to={15432}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                </div>
                <div className="text-sm text-gray-300 font-medium">
                  People Monitored
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 p-2 bg-white/10 rounded-full">
                  <Eye className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  <CountUp
                    from={0}
                    to={89}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                </div>
                <div className="text-sm text-gray-300 font-medium">
                  Alerts to Mobile Devices
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 p-2 bg-white/10 rounded-full">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  <CountUp
                    from={0}
                    to={99.8}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  %
                </div>
                <div className="text-sm text-gray-300 font-medium">
                  System Uptime
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Real-time security monitoring • Reliable threat detection • Advanced
              AI protection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
