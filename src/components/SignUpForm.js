

const SignUpForm = ({toggleLogin}) => {
    return(
        <div>
            <form id='sign-up'>
                    <h3>Sign up</h3>
                    <labal>Username:</labal>
                    <input type='text' placeholder='Enter Username'></input>
                    <label>Email Address:</label>
                    <input type='text' placeholder='Enter Email'></input>
                    <label>Password:</label>
                    <input type='text' placeholder='Enter Password'></input>
                    <button>Sign up</button>
            </form>
            <p>Already have an account? <a onClick={toggleLogin}>Log in here</a></p>

        </div>
    )
}

export default SignUpForm

// Email checks @, '.' ~ Valid email

