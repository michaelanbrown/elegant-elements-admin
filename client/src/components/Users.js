import '../App.css'
import React from "react";
import UserMap from './UserMap';

function Users ({ users, setUsers })  {


    const userMap = users.map(user => {
        <UserMap key={user.id} user={user}/>
    })

    return (
        <>{userMap}</>
    )
}

export default Users;