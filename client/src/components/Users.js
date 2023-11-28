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
            <button>Active</button>{" "}<button>Inactive</button>
            <br/>
            <br/>
            <NavLink className='navbarlink' to="/signup">Sign Up A New User</NavLink>
            <br/>
            <br/>
            <br/>
            {userMap}
        </div>
    )
}

export default Users;