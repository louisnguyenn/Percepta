import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Test } from "./components/test.jsx";
import { Home } from "./pages/Home";
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
