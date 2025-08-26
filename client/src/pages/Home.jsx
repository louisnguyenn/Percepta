import StarBorder from "../components/StarBorder";
import { useNavigate } from "react-router-dom";
import { ScrollReveal } from "../components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/live");
  };

  return (
    <div className="h-screen flex flex-col bg-[#2a2a2a]">
      <Navbar />
      <section className="flex-1 flex flex-col items-center justify-center px-6 text-white text-center">
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12">
              Percepta
            </h1>
            <p className="text-sm md:text-base leading-relaxed mb-4">
              Percepta is an intelligent security application that uses OpenCV
              to detect human presence in real time and automatically capture
              images upon detection.
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
      <Footer />
    </div>
  );
};
