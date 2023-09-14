import React, { useContext } from 'react';
import {Redirect} from "react-router-dom"
import '../App.css'
import { UserContext } from './context/User';

function Welcome() {

    function onLoginButton() {
        Redirect(`/login`)
    }

    return (
        <div>
            <br />
            <div>
                <br/>
                <p className='welcome'>Here at Elegant Elements we are blessed to be able to provide our customers with the ability to be part of the creation of their own piece.</p>
                <p className='welcome'>Our inspiration comes from promoting good mental health.
                We started out creating jewerly with inspirational messages so that in a time of need one can look down and remember positive affirmations.
                As time went on, we decided to expand to any personalized message that a customer desires.
                We will continue to promote good health and well being to all!</p>
            </div>
            <br/>
            <br/>
            <p><button onClick={onLoginButton} className='loginSignUp'>Login</button>&nbsp;&nbsp;&nbsp;&nbsp;<button className='loginSignUp'>Sign Up</button></p>
        </div>
    )
}

export default Welcome;