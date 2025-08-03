import './App.css'
import { Test } from './components/test.jsx'
import { Hero } from "./components/hero.jsx"
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
      {/* <Test /> */}
      <Hero />
    </>
  )
}

export default App
