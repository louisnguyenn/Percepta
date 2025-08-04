import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Test } from "./components/test.jsx";
import { Hero } from "./components/sections/Hero.jsx";
import { About } from "./components/sections/About.jsx";
import { Footer } from "./components/sections/Footer.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import "./index.css";
import { Route } from "lucide-react";

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
      <div className="bg-[#212121]">
        {/* <Test /> */}
        <Hero />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
