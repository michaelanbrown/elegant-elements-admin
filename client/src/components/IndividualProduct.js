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
              setPrice(product.price.toString())
            })
           } else {
            res.json().then(json => setErrors([json.error]))
           }
        })
      }, [])

      function inventoryAddition() {
        
      }

    return (
        <div>
          <h1>{product.name}</h1>
          <p>Category: { product.category ? product.category.name : null }
          <br/>
          Status: {product.status}
          <br/>
          { price[price.length-2] == "." ? `Price: $${price}0` : `Price: $${price}`}
          <br/>
          Current Qty: {product.quantity}</p>
          <button>Add to Inventory</button><button> Remove from Inventory</button>
        </div>
    )
}

export default IndividualProduct;