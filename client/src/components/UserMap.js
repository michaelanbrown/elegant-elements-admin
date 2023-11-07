import '../App.css'
import React from "react";

function UserMap ({ user })  {

// admins can change a user's title and admin boolean
console.log(user)
    return (
        <div>
            <h3>{user.name}</h3>
            <p>{user.title}</p>
        </div>
    )
}

export default UserMap;