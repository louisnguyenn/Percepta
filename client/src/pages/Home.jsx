import { Navbar } from "../components/Navbar";
import { Hero } from "../components/sections/Hero";
import { HowItWorks } from "../components/sections/How-It-Works";
import { About } from "../components/sections/About";
import { Footer } from "../components/sections/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <About />
      <Footer />
    </>
  );
};
