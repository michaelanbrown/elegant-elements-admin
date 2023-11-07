import '../App.css'
import React from "react";
import UserMap from './UserMap';

function Users ({ users, setUsers })  {

    const userMap = users.map(user => {
        return <UserMap key={user.id} user={user}/>
    })

    return (
        <div>
            <br/>
            {userMap}
        </div>
    )
}

export default Users;