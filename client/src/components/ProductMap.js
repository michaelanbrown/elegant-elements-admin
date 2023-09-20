import React from "react";
import '../App.css'

function ProductMap({ prod, name, quantity, price, status }) {

  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

export default ProductMap;