import LogInForm from './LogInForm'
import SignUpForm from './SignUpForm'
import { useState } from 'react'


const MainPage = () => {
    const [signUp, setSignUp] = useState(true)
    
    const toggleLogin = () => {
        setSignUp(signUp => !signUp)
    }
    
    
    return (
    <div id='mainBody'>
        {
        signUp ? 
        <LogInForm toggleLogin={toggleLogin}/> 
        : 
        <SignUpForm toggleLogin={toggleLogin} />
        }
    </div>
)}

export default MainPage