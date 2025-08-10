import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Test } from "./components/test.jsx";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Recording } from "./pages/Recording.jsx";
import { Saved } from "./pages/Saved.jsx";
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recording" element={<Recording />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
