import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

function ProductMap({ prod, name, quantity, price, status }) {

  return (
    <div className="ProductCard">
      <h4 className="lessSpace">{name}</h4>
      <p>Status: {status}
      <br/>
      Quantity: {quantity}
      <br/>
      {price.toString()[price.toString().length-2] == "." ? `Price: $${price}0` : `Price: $${price}`}
      <br/>
      <button className="quick">Quick Decrease</button>
      <br/>
      <Link className='navbarlink' to={`/products/${prod.id}`}>Order More Here</Link>
      </p>
      <br/>
    </div>
  );
}

export default ProductMap;