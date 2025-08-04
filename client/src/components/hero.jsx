import { ArrowRight } from "lucide-react"

export const Hero = () => {
  return (
    <section className="min-h-screen max-w-8xl mx-auto flex flex-col justify-center items-center">
      <div className="flex-1 flex items-end justify-center pb-20">
        <h1 className="text-center text-8xl font-bold text-white">Percepta</h1>
      </div>
      <div className="flex-1 flex items-start justify-center pt-20">
        <a href="Dashboard.jsx" className="flex items-center gap-2 bg-[#FF8C42] text-black py-3 px-6 rounded-full font-semibold transition-all relative hover:bg-[#E6753A] active:bg-white active:text-[#05091e] duration-300">Get Started <ArrowRight size={16}></ArrowRight></a>
      </div>
    </section>
  )
}
