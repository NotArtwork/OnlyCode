import { useState } from 'react'




const LogInForm = ({ toggleLogin }) => {
  return (
    <div>
        <form id='log-in'>
            <h3>Log In</h3>
            <input type='text' placeholder='Enter Username'></input>
            <input type='text' placeholder='Enter Password'></input>
            <button>Log In!</button>
            <button onClick={toggleLogin}>Sign up!</button>
        </form>
          <p>Don't have an account? <a onCick={toggleLogin}>Sign up here</a></p>
    </div>
  )
}

export default LogInForm