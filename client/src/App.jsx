import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { HowItWorks } from "./components/sections/How-It-Works";
import { About } from "./components/sections/About";
import { Footer } from "./components/sections/Footer";
import { Live } from "./pages/Live";
import { Video } from "./pages/Video";
import { Image } from "./pages/Image";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <HowItWorks />
              <About />
              <Footer />
            </>
          }
        />
        <Route path="/live" element={<Live />} />
        <Route path="/video" element={<Video />} />
        <Route path="/image" element={<Image />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
