import { useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main'
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import CodeEditor from './components/CodeEditor';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


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

  console.log(users.name, code.code)
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/main" >
            <Main  code={code.code} />
          </Route>
          <Route exact path="/" >
            <LandingPage users={users.name} />
          </Route>
        </Switch>
      </Router>
      {/* <Header />
      <CodeEditor /> */}
    </div>
  );
}

export default App;


