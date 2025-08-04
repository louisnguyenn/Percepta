import { ArrowRight } from "lucide-react";
import StarBorder from "../StarBorder";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/dashboard");
    console.log("Get Started clicked!");
  };

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 text-white text-center"
    >
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-14">
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
          speed="7s"
          onClick={handleGetStarted}
        >
          <div className="font-bold flex items-center gap-2 cursor-pointer">
            Get Started <ArrowRight size={18} />
          </div>
        </StarBorder>
      </div>
    </section>
  );
};
