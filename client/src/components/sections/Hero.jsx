import StarBorder from "../StarBorder";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Shield, Eye, Users, AlertTriangle } from "lucide-react";
import CountUp from "../CountUp";
import { ScrollReveal } from "../ScrollReveal";

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
      <ScrollReveal direction="up" distance={50} duration={0.8}>
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
      </ScrollReveal>

      <div className="mt-12">
        <ScrollReveal direction="up" distance={50} duration={1.2}>
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
        </ScrollReveal>
      </div>
    </section>
  );
};
