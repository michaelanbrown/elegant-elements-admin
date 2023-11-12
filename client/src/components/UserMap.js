import '../App.css'
import React, { useState } from "react";

function UserMap ({ user })  {
const [edit, setEdit] = useState(false)
const [formData, setFormData] = useState({
    name: user.name,
    title: user.title,
    admin: user.admin
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

function handleChecked(e) {
    setFormData({
        ...formData,
        [e.target.name] : !formData.admin
    });
}

function updateUser(e) {
    e.preventDefault()
    fetch(`users/${user.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify(formData)
    })
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
                            Admin Status: <input     style={{
                                width: 20,
                                height: 20
                                }}className="checkbox" type='checkbox' name='admin' checked={formData.admin} onChange={handleChecked} />
                            <br/>
                            <button onClick={onEdit}>Complete ✔️</button>
                <br/>
                <br/>
            </form> : null }
        </div>
    )
}

export default UserMap;