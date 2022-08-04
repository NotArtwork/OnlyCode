import { useState } from 'react'
import {NavLink, Redirect} from 'react-router-dom'



const LogInForm = ({ toggleLogin , users }) => {

  const [loginInfo, setLoginInfo] = useState([])


  const handleInput = (name, value) => {
    setLoginInfo({
      ...loginInfo,
      [name]: value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(loginInfo)
  }

    const loginAttempt = (e, info) => {
      e.preventDefault();
      fetch('http://localhost:3001/login/password', {
        method: 'POST',
        Accept: 'application/json',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(info)
      }).then(r => r.json()).then(data => console.log(data))
    }


  return (
    <div>
      <form id='log-in' onSubmit={(e) => loginAttempt(e, loginInfo)} method='post'>
            <h3>Log In</h3>
        <input type='text' placeholder='Enter Username' name='username' onChange={(e) => handleInput(e.target.name, e.target.value)}/>
            <input type='password' placeholder='Enter Password' name='password' onChange={(e) => handleInput(e.target.name, e.target.value)}/>
            <NavLink to="/main">
          <button>Log in</button>
            </NavLink>
        </form>
          <p>Don't have an account? <a onClick={toggleLogin}>Sign up here</a></p>
    </div>
  )
}



export default LogInForm

