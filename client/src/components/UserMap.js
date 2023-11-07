import '../App.css'
import React, { useState } from "react";

function UserMap ({ user })  {
const [edit, setEdit] = useState(false)
// admins can change a user's title and admin boolean


    return (
        <div>
            <h3 className='wayLessSpace'>{user.name}{" "}<button className='userEdit'>Edit ✏️</button></h3>
            <p className='wayLessSpace'>{user.title}</p>
            <p className='wayLessSpace'>{user.email}</p>
            {user.admin ? <p className='wayLessSpace'>Admin Status: True</p> : <p className='wayLessSpace'>Admin Status: False</p> }
            <br/>
            <br/>
        </div>
    )
}

export default UserMap;