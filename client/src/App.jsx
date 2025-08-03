import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:5000/api/detect");
    // console.log(response.data.users);
    setArray(response.data.users);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
    </>
  )
}

export default App
