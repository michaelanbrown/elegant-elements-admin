import React from "react";
import ProductMap from "./ProductMap";

function Products({ products, setProducts }) {

  const productMap = products.map(prod => {
    return <ProductMap key={prod.id} prod={prod} name={prod.name} price={prod.price} quantity={prod.quantity} status={prod.status}/>
  })


  return (
    <div>
      {productMap}
    </div>
  );
}

export default Products;