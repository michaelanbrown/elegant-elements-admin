import '../App.css'
import React from "react";

function UserMap ({ user })  {

// admins can change a user's title and admin boolean
    return (
        <>{user.name}</>
    )
}

export default UserMap;