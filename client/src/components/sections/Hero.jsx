// Hero.jsx
import { ArrowRight } from "lucide-react";
import StarBorder from "../StarBorder";

export const Hero = () => {
  const handleGetStarted = () => {
    // Add your click logic here
    console.log("Get Started clicked!");
  };

  return (
    <section
      id="hero"
      className="min-h-screen max-w-8xl mx-auto flex flex-col justify-center items-center"
    >
      <div className="flex-1 flex items-end justify-center pb-20">
        <h1 className="text-center text-8xl font-bold text-white">Percepta</h1>
        <p className="leading-8 max-w-5xl">
          Percepta uses advanced AI algorithms to analyze and interpret data,
          providing insights that help you make informed decisions.
        </p>
        <p>
          Our platform is designed to be user-friendly, allowing you to easily
          navigate through features and access the information you need.
        </p>
      </div>
      <div className="flex-1 flex items-start justify-center pt-20">
        <StarBorder
          as="button"
          color="#F59E0B"
          speed="6s"
          onClick={handleGetStarted}
        >
          <div className="font-bold flex items-center gap-2">
            Get Started <ArrowRight size={16} />
          </div>
        </StarBorder>
      </div>
    </section>
  );
};
