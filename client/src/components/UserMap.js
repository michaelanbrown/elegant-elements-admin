import '../App.css'
import React from "react";

function UserMap ({ user })  {

// admins can change a user's title and admin boolean

    return (
        <div>
            <h3 className='wayLessSpace'>{user.name}{" "}<button>Edit✏️</button></h3>
            <p className='wayLessSpace'>{user.title}</p>
            <p className='wayLessSpace'>{user.email}</p>
            {user.admin ? <p className='wayLessSpace'>Admin Status: True</p> : <p className='wayLessSpace'>Admin Status: False</p> }
            <br/>
            <br/>
        </div>
    )
}

export default UserMap;