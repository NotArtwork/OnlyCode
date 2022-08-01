import { useState } from 'react'




const LogInForm = ({ toggleLogin }) => {
  return (
    <div>
        <form id='log-in'>
            <h3>Log In</h3>
            <input type='text' placeholder='Enter Username'></input>
            <input type='text' placeholder='Enter Password'></input>
            <button>Log in</button>
        </form>
          <p>Don't have an account? <a onClick={toggleLogin}>Sign up here</a></p>
    </div>
  )
}

export default LogInForm