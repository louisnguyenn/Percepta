import { ScrollReveal } from "../ScrollReveal";

export const About = () => {
  return (
    <section
      id="about"
      className="bg-[#EEEEEE] py-20 min-h-screen"
      style={{
        backgroundImage: "url(/eagle_outline_bg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "170%",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-6xl mx-auto z-10">
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-5xl text-[#FF8C42] font-semibold mb-3">
              Who We Are
            </h2>
            <hr className="px-7 border-none bg-[#FF8C42] rounded h-1"></hr>
            <p className="max-w-4xl p-6 text-center text-lg leading-8">
              Percepta is a cutting-edge human detection system that leverages
              advanced computer vision and AI technology to provide real-time
              monitoring and security solutions. Our platform intelligently
              identifies and tracks human presence in recorded environments,
              delivering accurate detection capabilities for enhanced safety and
              security monitoring.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <div className="py-15 flex flex-col justify-center items-center">
            <h2 className="text-5xl text-[#FF8C42] font-semibold mb-3">
              Our Goal
            </h2>
            <hr className="px-7 border-none bg-[#FF8C42] rounded h-1"></hr>
            <p className="max-w-4xl p-6 text-center text-lg leading-8">
              Our goal is to revolutionize security monitoring by making
              advanced human detection technology accessible, reliable, and
              effortless to deploy. We strive to empower organizations with
              intelligent surveillance solutions that enhance safety while
              maintaining privacy and operational efficiency, ultimately
              creating safer environments through innovative AI-driven security
              intelligence.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
