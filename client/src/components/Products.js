import React, { useState } from "react";
import ProductMap from "./ProductMap";

function Products({ products, setProducts }) {

  const productMap = products.sort((a, b) => a.name.localeCompare(b.name)).map(prod => {
    return <ProductMap key={prod.id} prod={prod} name={prod.name} price={prod.price} quantity={prod.quantity} status={prod.status}/>
  })

  //add a filter

  return (
    <div>
      {productMap}
    </div>
  );
}

export default Products;