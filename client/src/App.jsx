import './App.css'
import { Test } from './components/test.jsx'
import { Hero } from "./components/hero.jsx"
import { About } from "./components/About.jsx"
import './index.css'

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
      </div>
    </>
  )
}

export default App
