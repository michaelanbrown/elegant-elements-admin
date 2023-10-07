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
      fetch(`/products/${id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type" : "application/json",
          "Accept" : "application/json"
        },
        body: JSON.stringify(additionData)
      })
     }
     //finish inventoryaddition function, finish onchange handleadditionchange function
     //create inventoryremve function, create onchange handleremovalchange function, create dtate for removaldata

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
          <form>
            Add to Inventory: <input  type="text" name="additionData" value={additionData} onChange={handleAdditionChange} />
          </form>
          <form> Remove from Inventory</form>
        </div>
    )
}

export default IndividualProduct;