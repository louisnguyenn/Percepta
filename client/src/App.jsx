import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Live } from "./pages/Live";
import { Video } from "./pages/Video";
import { Image } from "./pages/Image";
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
          <Route path="/live" element={<Live />} />
          <Route path="/video" element={<Video />} />
          <Route path="/image" element={<Image />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
