import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

function ProductMap({ prod, name, quantity, price, status, products, setProducts }) {

  function updateProducts(updatedProduct) {
    const updatingProduct = products.map(currentProduct => {
      if (currentProduct.id === product.id) {
        return updatedProduct
      } else {
        return currentProduct
      }
    })
    setProducts(updatingProduct)
  }

  function quickDecrease(e) {
    e.preventDefault()
    fetch(`products/${prod.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({quantity: (quantity - 1)})
    }).then (res => {
      res.json()
      .then(product => {

      })
    })
  }



  return (
    <div className="ProductCard">
      <h4 className="lessSpace">{name}</h4>
      <p>Status: {status}
      <br/>
      Quantity: {quantity}
      <br/>
      {price.toString()[price.toString().length-2] == "." ? `Price: $${price}0` : `Price: $${price}`}
      <br/>
      <Link className='navbarlink' to={`/products/${prod.id}`}>Order More Here</Link>
      <br/>
      <button className="quick">Quick Decrease</button>
      </p>
      <br/>
    </div>
  );
}

export default ProductMap;