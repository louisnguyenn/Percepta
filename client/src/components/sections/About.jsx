export const About = () => {
  return (
    <section className="bg-white py-20 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center z-10">
        <h2 className="text-5xl text-[#FF8C42] font-semibold">Who we are</h2>
        <p className="max-w-4xl p-6 text-center text-lg leading-8">
          Percepta is a cutting-edge human detection system that leverages advanced computer vision and AI technology to provide real-time monitoring and security solutions. Our platform intelligently identifies and tracks human presence in recorded environments, delivering accurate detection capabilities for enhanced safety and security monitoring.
        </p>

        <div className="py-20 flex flex-col justify-center items-center">
          <h2 className="text-5xl text-[#FF8C42] font-semibold">Our Goal</h2>
          <p className="max-w-4xl p-6 text-center text-lg leading-8">
            Our goal is to revolutionize security monitoring by making advanced human detection technology accessible, reliable, and effortless to deploy. We strive to empower organizations with intelligent surveillance solutions that enhance safety while maintaining privacy and operational efficiency, ultimately creating safer environments through innovative AI-driven security intelligence.
          </p>
        </div>
      </div>
    </section>
  )
}
