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
        e.preventDefault()
        if (loginInfo.email.includes('@' && '.com')) {
            const postUserData = async (info) => {
                let req =  await fetch('http://localhost:3001/users', {
                    method:'POST',
                    Accept: 'application/json',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(info)
                })
                let res = req.json()
            }
            postUserData(loginInfo)
            alert('You signed up!')
        } else {
            alert('Invalid Email Address')
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

        </div>
    )
}

export default SignUpForm

// Email checks @, '.' ~ Valid email

