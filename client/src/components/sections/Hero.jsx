// Hero.jsx
import { ArrowRight } from "lucide-react";
import StarBorder from "../StarBorder";

export const Hero = () => {
  const handleGetStarted = () => {
    // Add your click logic here
    console.log("Get Started clicked!");
  };

  return (
    <section className="min-h-screen max-w-8xl mx-auto flex flex-col justify-center items-center">
      <div className="flex-1 flex items-end justify-center pb-20">
        <h1 className="text-center text-8xl font-bold text-white">Percepta</h1>
      </div>
      <div className="flex-1 flex items-start justify-center pt-20">
        <StarBorder
          as="button"
          color="white"
          speed="5s"
          onClick={handleGetStarted}
        >
          <div className="flex items-center gap-2">
            Get Started <ArrowRight size={16} />
          </div>
        </StarBorder>
      </div>
    </section>
  );
};
