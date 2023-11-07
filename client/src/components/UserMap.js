import '../App.css'
import React from "react";

function UserMap ({ user })  {

// admins can change a user's title and admin boolean
console.log(user)
    return (
        <div>
            <h3>{user.name}</h3>
        </div>
    )
}

export default UserMap;