import '../App.css'
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from './context/User';
import { useParams } from 'react-router-dom';

function IndividualProduct({ products, setProducts }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [product, setProduct] = useState({})
    const [errors, setErrors] = useState([])
    const [price, setPrice] = useState("")
    const [additionData, setAdditionData] = useState(0)
    const [removalData, setRemovalData] = useState(0)
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

    function handleAdditionChange(e) {
      setAdditionData(e.target.value);
    }  

    function inventoryAddition() {
      fetch(`/products/${id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type" : "application/json",
          "Accept" : "application/json"
        },
        body: JSON.stringify({quantity: product.quantity + additionData})
      }).then(res => {
        if(res.ok) {
          res.json(setProduct({...product, quantity: product.quantity + additionData}))
        }
      })
    }

    function handleRemovalChange(e) {
      setRemovalData(e.target.value);
    }

    function inventoryRemoval() {
      fetch(`/products/${id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type" : "application/json",
          "Accept" : "application/json"
        },
        body: JSON.stringify({quantity: product.quantity - removalData})
      }).then(res => {
        if(res.ok) {
          res.json(setProduct({...product, quantity: product.quantity - additionData}))
        }
      })
    }

     //check inventoryaddition function, handleadditionchange function
     //check handleremovalchange function, inventoryremoval function

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
          <form onSubmit={inventoryAddition}>
            Add to Inventory: <input  type="text" name="additionData" value={additionData} onChange={handleAdditionChange} />
          </form>
          <form onSubmit={inventoryRemoval}>
            Remove from Inventory: <input  type="text" name="removalData" value={removalData} onChange={handleRemovalChange} />
            <br/>
            <input type='submit' value='Remove' />
          </form>
        </div>
    )
}

export default IndividualProduct;