import '../App.css'
import React from "react";
import { NavLink } from "react-router-dom";
import UserMap from './UserMap';

function Users ({ users, setUsers })  {

    const userMap = users.map(user => {
        return <UserMap key={user.id} user={user} users={users} setUsers={setUsers}/>
    })

    return (
        <div>
            <br/>
            <NavLink className='navbarlink' to="/signup">Sign Up</NavLink>
            {userMap}
        </div>
    )
}

export default Users;