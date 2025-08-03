export const Hero = () => {
  return (
    <div className="min-h-screen max-w-8xl mx-auto flex flex-col justify-center items-center">
      <div className="flex-1 flex items-end justify-center pb-20">
        <h1 className="text-center text-6xl font-bold text-white">Percepta</h1>
      </div>
      <div className="flex-1 flex items-start justify-center pt-20">
        <a href="Dashboard.jsx" className="bg-white text-black py-3 px-6 rounded-full font-medium transition-all relative">Get Started</a>
      </div>
    </div>
  )
}
