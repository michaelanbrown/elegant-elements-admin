import React, { useContext, useState } from "react";
import { UserContext } from './context/User';
import ProductMap from "./ProductMap";

function Products({ products, setProducts }) {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [productFiltering, setProductFiltering] = useState("")

  const filteredProducts = products.filter(product => product.name.toLowerCase().indexOf(productFiltering.toLowerCase()) > -1)

  const productMap = filteredProducts.sort((a, b) => a.name.localeCompare(b.name)).map(prod => {
    return <ProductMap key={prod.id} prod={prod} name={prod.name} price={prod.price} quantity={prod.quantity} status={prod.status}/>
  })

  //add a filter

  return (
    <div>
      <form>
        Search by Product: <input className="formFields" type="text" name="productFiltering" value={productFiltering} onChange={} />
      </form>
      {productMap}
    </div>
  );
}

export default Products;