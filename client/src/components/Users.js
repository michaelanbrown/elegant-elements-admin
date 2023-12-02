import '../App.css'
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import UserMap from './UserMap';

function Users ({ users, setUsers })  {
    const [active, setActive] = useState(true)
    const [activeUsers, setActiveUsers] = useState([])
    const [inactiveUsers, setInactiveUsers] = useState([])
    const [filter, setFilter] = useState("")

    //add user filter

    useEffect(() => {
        setActiveUsers(users.filter(user => user.active === true))
        setInactiveUsers(users.filter(user => user.active === false))
      }, [users])

    function activeClick() {
        setActive(!active)
    }

    const activeUserMap = activeUsers.map(user => {
        return <UserMap key={user.id} user={user} users={users} setUsers={setUsers}/>
    })

    const inactiveUserMap = inactiveUsers.map(user => {
        return <UserMap key={user.id} user={user} users={users} setUsers={setUsers}/>
    })

    function handleChange(e) {
        
    }

    return (
        <div>
            {active ? <div>
                <form>
                    Name: <input className="formFields" type='text' name='filter' value={filter} onChange={handleChange} />
                </form>
                    <br/>
                    <button onClick={activeClick} className='logout'>Active</button>{" "}<button onClick={activeClick} className='logout'>Inactive</button>
                    <br/>
                    <br/>
                    <NavLink className='navbarlink' to="/signup">Sign Up A New User</NavLink>
                    <br/>
                    <br/>
                    <br/>
                    {activeUserMap}
                    </div>
                :
                    <div>
                    <br/>
                    <button onClick={activeClick} className='logout'>Active</button>{" "}<button onClick={activeClick} className='logout'>Inactive</button>
                    <br/>
                    <br/>
                    <NavLink className='navbarlink' to="/signup">Sign Up A New User</NavLink>
                    <br/>
                    <br/>
                    <br/>
                    {inactiveUserMap}
            </div>}
        </div>
    )
}

export default Users;