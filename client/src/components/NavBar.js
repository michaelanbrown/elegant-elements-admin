import '../App.css'
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from './context/User';

export default function NavBar ({})  {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    return (
        <div>
            <NavLink className="Navelements" to="/">Welcome</NavLink>
        </div>
    )
}