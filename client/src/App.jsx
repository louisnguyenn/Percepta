import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Test } from "./components/test.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/sections/Hero.jsx";
import { HowItWorks } from "./components/sections/How-It-Works.jsx";
import { About } from "./components/sections/About.jsx";
import { Footer } from "./components/sections/Footer.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import "./index.css";

function App() {
  // const [array, setArray] = useState([]);

  // const fetchAPI = async () => {
  //   const response = await axios.get("http://localhost:5000/api/detect");
  //   // console.log(response.data.users);
  //   setArray(response.data.users);
  // };

  // useEffect(() => {
  //   fetchAPI();
  // }, []);

  return (
    <>
      <div className="bg-[#2a2a2a]">
        {/* <Test /> */}
        <Navbar />
        <Hero />
        <HowItWorks />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
