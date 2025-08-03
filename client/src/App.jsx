import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:5000/api/users");
    // console.log(response.data.users);
    setArray(response.data.users);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      {array.map((user, index) => (
        <div key={index}>
          <span>{user}</span>
          <br></br>
        </div>
      ))}
    </>
  )
}

export default App
