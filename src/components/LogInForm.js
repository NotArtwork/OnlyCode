import { useState } from 'react'




const LogInForm = ({ toggleLogin ,users }) => {

  const [loginInfo, setLoginInfo] = useState([])

  const handleInput = (name, value) => {
    setLoginInfo({
      ...loginInfo,
      [name]: value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (loginInfo.name == users.name && loginInfo.password == users.password) {
      alert('You have logged in!')
    }

  }

  return (
    <div>
        <form id='log-in' onSubmit={handleLogin}>
            <h3>Log In</h3>
        <input type='text' placeholder='Enter Username' name='username' onChange={(e) => handleInput(e.target.name, e.target.value)}/>
            <input type='password' placeholder='Enter Password' name='password' onChange={(e) => handleInput(e.target.name, e.target.value)}/>
            <button>Log in</button>
        </form>
          <p>Don't have an account? <a onClick={toggleLogin}>Sign up here</a></p>
    </div>
  )
}

export default LogInForm

