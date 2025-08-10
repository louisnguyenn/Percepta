import { ScrollReveal } from "../ScrollReveal";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <div className="flex flex-col justify-center items-center">
            <h2
              id="how-it-works"
              className="text-5xl text-[#FF8C42] font-semibold mb-3"
            >
              How It Works
            </h2>
            <hr className="px-7 border-none bg-[#FF8C42] rounded h-1"></hr>
            <p className="max-w-4xl p-6 text-center text-lg leading-8">
              Percepta analyzes video recordings using sophisticated machine
              learning algorithms trained specifically for human detection. Our
              system processes footage frame by frame, identifying human figures
              through advanced pattern recognition and motion analysis. The AI
              distinguishes between humans and other objects with remarkable
              accuracy, tracking movement patterns and generating detailed
              reports. Users simply upload their video files, and Percepta
              automatically scans, detects, and highlights all human activity
              with precise timestamps and location data, making security
              analysis faster and more reliable than ever before.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <div className="flex flex-col justify-center items-center">
            <img
              src="/output_frame.png"
              alt="Delivery man detected by program"
              className="w-[700px] h-auto mt-15"
            ></img>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
