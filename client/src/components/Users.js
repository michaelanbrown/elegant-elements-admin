import '../App.css'
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import UserMap from './UserMap';

function Users ({ users, setUsers })  {
    const [active, setActive] = useState(true)
    const userMap = users.map(user => {
        return <UserMap key={user.id} user={user} users={users} setUsers={setUsers}/>
    })

    useEffect(() => {
        
      }, [])

    function activeClick() {
        setActive(!active)
    }

    // useEffect to get active/inactive users

    return (
        <div>
            {active ? <div>
                <br/>
                <button onClick={activeClick} className='logout'>Active</button>{" "}<button onClick={activeClick} className='logout'>Inactive</button>
                <br/>
                <br/>
                <NavLink className='navbarlink' to="/signup">Sign Up A New User</NavLink>
                <br/>
                <br/>
                <br/>
                {userMap}
            </div> : null}
        </div>
    )
}

export default Users;