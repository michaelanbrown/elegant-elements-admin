import React from "react";
import '../App.css'

function ProductMap({ prod, name, quantity, price, status }) {

  return (
    <div>
      <h4>{name}</h4>
      <p>Status: {status}
      <br/>
      Quantity: {quantity}
      <br/>
      Price: ${price}
      </p>
    </div>
  );
}

export default ProductMap;