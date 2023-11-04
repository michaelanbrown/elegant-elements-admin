import '../App.css'
import React from "react";
import UserMap from './UserMap';

function Users ({ users, setUsers })  {

// admins can change a user's title and admin boolean
    const userMap = users.map(user => {
        <UserMap user={user}/>
    })

    return (
        <>{userMap}</>
    )
}

export default Users;