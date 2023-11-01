import React, { useState, useContext } from 'react';
import '../App.css'
import { UserContext } from './context/User';
import { useNavigate } from 'react-router-dom';

function Signup({ users, setUsers, getCategories, getProducts, getUsers }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        title: ''
    })
    const {name, email, password, title} = formData
    const navigate = useNavigate();

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
                    getCategories()
                    getProducts()
                    navigate(`/`)
                })
            } else {
                res.json().then(json => setErrors(json.errors))
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
        <> 
            <form onSubmit={onSignUp}>
                Name: <input className="formFields" type='text' name='name' value={name} onChange={handleChange} />
                <br/>
                Email: <input className="formFields" type='text' name='email' value={email} onChange={handleChange} />
                <br/>
                Title: <input className="formFields" type='text' name='title' value={title} onChange={handleChange} />
                <br/>
                Password: <input className="formFields" type='password' name='password' value={password} onChange={handleChange} />
                <br/>
                <input type='submit' value='Sign up!' />
            </form>
            { errors ? <br/> : null }
            { errors ? errors.map(error => <div className='error' key={error}>{error}</div>) :null }
        </>
    )
}

export default Signup;