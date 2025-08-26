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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
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
