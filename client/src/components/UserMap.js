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

function handleChange(e) {
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
    });
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
            {edit ? <form>
                            <h3>Name: <input className="nameFormField" type='text' name='name' value={formData.name} onChange={handleChange} /></h3>
                            <p className='wayLessSpace'>Email: {user.email}</p>
                            Title: <input className="formFields" type='text' name='title' value={formData.title} onChange={handleChange} />
                            <br/>
                            Admin Status: <input className="formFields" type='text' name='admin' value={formData.admin} onChange={handleChange} />
                <br/>
                <br/>
            </form> : null }
        </div>
    )
}

export default UserMap;