import '../App.css'
import React, { useState } from "react";

function UserMap ({ user })  {
const [edit, setEdit] = useState(false)
const [formData, setFormData] = useState({
    name: user.name,
    title: user.title,
    admin : user.admin
})
// admins can change a user's title and admin boolean
function onEdit() {
    setEdit(!edit)
}

    return (
        <div>
            {!edit ? <div>
                <h3 className='wayLessSpace'>{user.name}{" "}<button onClick={onEdit} className='userEdit'>Edit ✏️</button></h3>
                <p className='wayLessSpace'>{user.title}</p>
                <p className='wayLessSpace'>{user.email}</p>
                {user.admin ? <p className='wayLessSpace'>Admin Status: True</p> : <p className='wayLessSpace'>Admin Status: False</p> }
                <br/>
                <br/>
            </div> : null }
            {edit ? <div>
                        <form>
                            <input className="formFields" type='text' name='name' value={formData.name} onChange={} />
                        </form>
                <br/>
                <br/>
            </div> : null }
        </div>
    )
}

export default UserMap;