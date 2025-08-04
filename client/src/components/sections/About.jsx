export const About = () => {
  return (
    <section id="about" className="bg-white py-20 min-h-screen">
      <div className="max-w-6xl mx-auto z-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-5xl text-[#FF8C42] font-semibold mb-3">
            Who we are
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

        <div className="py-15 flex flex-col justify-center items-center">
          <h2 className="text-5xl text-[#FF8C42] font-semibold mb-3">
            Our Goal
          </h2>
          <hr className="px-7 border-none bg-[#FF8C42] rounded h-1"></hr>
          <p className="max-w-4xl p-6 text-center text-lg leading-8">
            Our goal is to revolutionize security monitoring by making advanced
            human detection technology accessible, reliable, and effortless to
            deploy. We strive to empower organizations with intelligent
            surveillance solutions that enhance safety while maintaining privacy
            and operational efficiency, ultimately creating safer environments
            through innovative AI-driven security intelligence.
          </p>
        </div>

        <div className="py-15 flex flex-col justify-center items-center">
          <h2 className="text-5xl text-[#FF8C42] font-semibold mb-3">
            How it works
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
            automatically scans, detects, and highlights all human activity with
            precise timestamps and location data, making security analysis
            faster and more reliable than ever before.
          </p>
        </div>
      </div>
    </section>
  );
};
