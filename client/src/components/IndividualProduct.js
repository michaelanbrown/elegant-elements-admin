import '../App.css'
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from './context/User';
import { useParams } from 'react-router-dom';

function IndividualProduct({ products, setProducts }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [product, setProduct] = useState({})
    const [errors, setErrors] = useState([])
    const [price, setPrice] = useState("")
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`/products/${id}`)
        .then(res => {
           if (res.ok) {
            res.json()
            .then(product => {
              setProduct(product)  
              setPrice(product.price)
            })
           } else {
            res.json().then(json => setErrors([json.error]))
           }
        })
      }, [])
      console.log(price)

    return (
        <div>
          <h1>{product.name}</h1>
          <p>Status: {product.status}</p>
        </div>
    )
}

export default IndividualProduct;