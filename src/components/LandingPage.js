import LogInForm from './LogInForm'
import SignUpForm from './SignUpForm'
import { useState } from 'react'
// import Background from './public/Background.mp4'

const LandingPage = ({ users }) => {
    const [signUp, setSignUp] = useState(true)

    const toggleLogin = () => {
        setSignUp(signUp => !signUp)
    }

    return (
        <div id='mainBody'>

            <video autoPlay muted loop id="myVideo">
            <source src="./Background.mp4" type="video/mp4" />
            </video>
            {
                signUp ?
                    <LogInForm toggleLogin={toggleLogin} users={users} />
                    :
                    <SignUpForm toggleLogin={toggleLogin} />
            }




        </div>
    )
}

export default LandingPage;