import '../App.css'
import React, { useContext, useEffect } from "react";
import { UserContext } from './context/User';
import { useParams } from 'react-router-dom';

function IndividualProduct({ products, setProducts }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`/${id}`)
        .then(res => {
            
        })
      }, [])

    return (
        <div>

        </div>
    )
}

export default IndividualProduct;