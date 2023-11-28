import '../App.css'
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import UserMap from './UserMap';

function Users ({ users, setUsers })  {
    const [active, setActive] = useState(true)
    const userMap = users.map(user => {
        return <UserMap key={user.id} user={user} users={users} setUsers={setUsers}/>
    })

    function activeClick() {
        setActive(!active)
    }

    return (
        <div>
            <div>
                <br/>
                <button onClick={activeClick} className='logout'>Active</button>{" "}<button onClick={activeClick} className='logout'>Inactive</button>
                <br/>
                <br/>
                <NavLink className='navbarlink' to="/signup">Sign Up A New User</NavLink>
                <br/>
                <br/>
                <br/>
                {userMap}
            </div>
        </div>
    )
}

export default Users;