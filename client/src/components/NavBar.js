import '../App.css'
import React, { useContext } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import { UserContext } from './context/User';

export default function NavBar ({})  {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();


    return (
        <nav className="NavBar">
            <br/>
            <BrowserRouter>
                <NavLink className='loginSignUp' to="/">Welcome</NavLink>
            </BrowserRouter>
            <br/>
            <button className='logout'>Logout</button>
        </nav>
    )
}