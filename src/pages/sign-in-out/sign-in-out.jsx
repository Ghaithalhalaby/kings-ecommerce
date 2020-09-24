import React from 'react'
import './sign-in-out.scss'
import SignIn from '../../components/sign-in/sign-in.componant'
import SignUp from '../../components/sign-up/signup.componant'

function SignInOut() {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInOut
