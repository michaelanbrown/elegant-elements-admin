import '../App.css'
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
        currentUser ? <nav className="NavBar">
          <br/>
          <NavLink className='loginSignUp' to="/">Welcome</NavLink>
          <br/>
          <button onClick={onLogOut} className='logout'>Logout</button>
        </nav> : null
    )
}