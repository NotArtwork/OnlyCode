import { useState } from 'react'

const SignUpForm = ({toggleLogin}) => {

    const [loginInfo, setLoginInfo ] = useState([])

    const handleInput = (name ,value) => {
            setLoginInfo({
                ...loginInfo,
                [name]: value
            })
    }


    const handleSubmit = (e) => {
        if (loginInfo.email.includes('@' && '.com') && loginInfo.password.length >= 6 )  {
            const postUserData = async (info) => {
                let req =  await fetch('http://localhost:3001/users/', {
                    method:'POST',
                    Accept: 'application/json',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(info)
                })
                let res = req.json()
            }
            postUserData(loginInfo)
            alert('You signed up!')
        } else if (loginInfo.password < 6) {
            e.preventDefault()
            alert('Invalid Password')
        } else {
            e.preventDefault()
            alert('Invalid Email Address or Password')
        }

    }


    return(
        <div>
            <form id='sign-up' onSubmit={handleSubmit}>
                    <h3>Sign up</h3>
                    <labal>Username:</labal>
                <input type='text' placeholder='Enter Username' name='username' onChange={(e) => handleInput(e.target.name, e.target.value)}/>
                    <label>Email Address:</label>
                <input type='text' placeholder='Enter Email' name='email' onChange={(e) => handleInput(e.target.name, e.target.value)}/>
                    <label>Password:</label>
                <input type='password' placeholder='Enter Password' name='password' onChange={(e) => handleInput(e.target.name, e.target.value)} />
                    <button>Sign up</button>
            </form>
            <p>Already have an account? <a onClick={toggleLogin}>Log in here</a></p>
            <p>Password needs to have <strong>at least</strong> 6 characters</p>

        </div>
    )
}

export default SignUpForm

// Email checks @, '.' ~ Valid email

