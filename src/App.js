import { useEffect, useState } from 'react'
import './App.css'
import MainPage from './components/LandingPage.js'
import LandingPage from './components/LandingPage.js';


function App() {

  const [users, setUsers] = useState([])
  const [code, setCode] = useState([])

  useEffect(() => {

    const fetchUsers = async () => {
      let req = await fetch('http://localhost:3001/users')
      let res = await req.json()
      setUsers(res)
    }

    const fetchCode = async () => {
      let req = await fetch('http://localhost:3001/code')
      let res = await req.json()
      setCode(res)
    }
    fetchCode();
    fetchUsers();
  },[])

  console.log(code, users)
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;


