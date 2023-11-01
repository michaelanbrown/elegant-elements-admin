import React, { useState, useContext } from 'react';
import '../App.css'
import { UserContext } from './context/User';
import { useNavigate } from 'react-router-dom';

function Login({ getCategories, getProducts, getUsers }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const {email, password} = formData
    const navigate = useNavigate();

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
                    getCategories()
                    getProducts()
                    navigate(`/`)
                })
            } else {
                res.json().then(json => setErrors([json.errors]))
            }
        }) 
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        });
    }

    return (
        <div>
            <form onSubmit={onLogin}>
                Email: <input className="formFields" type="text" name="email" value={email} onChange={handleChange} />
                <br/>
                Password: <input className="formFields" type="password" name="password" value={password} onChange={handleChange} />
                <br/>
                <input type="submit" value="Log in" />
            </form>
            <br/>
            { errors ? errors.map(error => <div className='error' key={error}>{error}</div>) :null }
        </div>
    )
}

export default Login;