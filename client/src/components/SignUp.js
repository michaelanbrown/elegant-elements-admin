import React, { useState, useContext } from 'react';
import '../App.css'
import { UserContext } from './context/User';


function Signup({ users, setUsers }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        title: ''
    })
    const {name, email, password, title} = formData

    function onSignUp(e){
        e.preventDefault()
        const user = {
            name,
            email,
            password,
            title
        }   
        fetch(`/users`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setCurrentUser(user)
                    setUsers([...users, user])
                })
            } else {
                res.json().then(json => setErrors(json.errors))
            }
        })  
    }

    return (
        <> 
    sign me up
        </>
    )
}

export default Signup;