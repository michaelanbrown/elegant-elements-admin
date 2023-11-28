import '../App.css'
import React, { useState } from "react";

function UserMap ({ user, users, setUsers })  {
const [edit, setEdit] = useState(false)
const [errors, setErrors] = useState([])
const [active, setActive] = useState(true)
const [formData, setFormData] = useState({
    name: user.name,
    title: user.title,
    admin: user.admin,
    active: user.active
})

const [activation, setActivation] = useState(user.active)

// filter for only active users and then push deactivated users to different section

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

function updateUserInfo(updatedUser) {
    const updatingUser = users.map(currentUser => {
        if(currentUser.if === user.id) {
            return updatedUser
        } else {
            return currentUser
        }
    })
    setUsers(updatingUser)
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
    }).then (res => {
        if(res.ok) {
            res.json(updateUserInfo(formData))
        } else {
            res.json().then(json => setErrors(json.errors))
        }
    })
    setEdit(!edit)
}

function onActivation(e) {
    e.preventDefault()
    fetch(`users/${user.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({active: !activation})
    }).then (res => {
        if(res.ok) {
            res.json().then(userUpdated => {
                updateUserInfo(userUpdated)
                setActivation(!activation)
            })
        } else {
            res.json().then(json => setErrors(json.errors))
        }
    })
}

    return (
        <div>
            <div>
                {!edit ? <div>
                    <h3 className='wayLessSpace'>{formData.name}{" "}<button onClick={onEdit} className='userEdit'>Edit ✏️</button></h3>
                    <p className='wayLessSpace'>{formData.title}<button onClick={onActivation} className='userEdit'>{activation ? "Deactivate" : "Activate"}</button></p>
                    <p className='wayLessSpace'>{user.email}</p>
                    {formData.admin ? <p className='wayLessSpace'>Admin Status: True</p> : <p className='wayLessSpace'>Admin Status: False</p> }
                    <br/>
                    <br/>
                </div> : null }
                {edit ? <form onSubmit={updateUser}>
                                <h3>Name: <input className="nameFormField" type='text' name='name' value={formData.name} onChange={handleChange} /></h3>
                                <p className='wayLessSpace'>Email: {user.email}</p>
                                Title: <input className="formFields" type='text' name='title' value={formData.title} onChange={handleChange} />
                                <br/>
                                Admin Status: <input     style={{
                                    width: 20,
                                    height: 20
                                    }}className="checkbox" type='checkbox' name='admin' checked={formData.admin} onChange={handleChecked} />
                                <br/>
                                <button>Complete ✔️</button>
                    <br/>
                    <br/>
                </form> : null }
            </div>
        </div>
    )
}

export default UserMap;