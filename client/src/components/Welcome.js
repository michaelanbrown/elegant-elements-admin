import { NavLink } from "react-router-dom";
import '../App.css'
import React, { useContext } from "react";
import { UserContext } from './context/User';

function Welcome() {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    return (
        <div>
            <br />
            <div>
                <br/>
                <p>Here at Elegant Elements we are blessed to be able to provide our customers with the ability to be part of the creation of their own piece.</p>
                <p>Our inspiration comes from promoting good mental health.
                We started out creating jewerly with inspirational messages so that in a time of need one can look down and remember positive affirmations.
                As time went on, we decided to expand to any personalized message that a customer desires.
                We will continue to promote good health and well being to all!</p>
            </div>
            <br/>
            <br/>
            <p><NavLink className='loginSignUp' to="/login">Login</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;<NavLink className='loginSignUp' to="/signup">Sign Up</NavLink></p>
        </div>
    )
}

export default Welcome;