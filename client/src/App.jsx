import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Live } from "./pages/Live";
import { Video } from "./pages/Video";
import { Image } from "./pages/Image";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/live" element={<Live />} />
            <Route path="/video" element={<Video />} />
            <Route path="/image" element={<Image />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
