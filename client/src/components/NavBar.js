import '../App.css'
import React, { useContext } from "react";
import { BrowserRouter, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from './context/User';

export default function NavBar ({})  {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();
    const onLogOut = () => {
        fetch(`/logout`, {
          method:"DELETE"
        })
        .then(res =>{
          if(res.ok){
            setCurrentUser(false)
            navigate(`/`)
          }
        })
      }

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