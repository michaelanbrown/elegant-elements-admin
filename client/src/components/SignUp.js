import React, { useState, useContext } from 'react';
import '../App.css'
import { UserContext } from './context/User';


function Signup() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        title: ''
    })

    return (
        <> 

        </>
    )
}

export default Signup;