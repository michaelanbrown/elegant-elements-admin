import React from "react";
import '../App.css'

function ProductMap({ prod, name, quantity, price, status }) {

  return (
    <div>
      <h4 className="lessSpace">{name}</h4>
      <p>Status: {status}
      <br/>
      Quantity: {quantity}
      <br/>
      {price.toString()[price.toString().length-2] == "." ? `Price: $${price}0` : `Price: $${price}`}
      </p>
    </div>
  );
}

export default ProductMap;