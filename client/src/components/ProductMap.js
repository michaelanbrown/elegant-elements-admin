import React from "react";
import '../App.css'

function ProductMap({ prod, name, quantity, price, status }) {

  return (
    <div>
      <h4>{name}</h4>
      <p>Status: {status}</p>
    </div>
  );
}

export default ProductMap;