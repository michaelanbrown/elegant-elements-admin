import React, { useState, useContext } from 'react';
import '../App.css'
import { UserContext } from './context/User';

function Login() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const {email, password} = formData

    function onLogin(e){
        e.preventDefault()
        const user = {
            email,
            password
        }
       
        fetch("/login",{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setCurrentUser(user)
                })
            } else {
                res.json().then(json => setErrors([json.errors]))
            }
        }) 
    }

    return (
        <div>

        </div>
    )
}

export default Login;