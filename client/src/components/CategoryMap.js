import '../App.css'
import React, { useContext, useState } from "react";
import { UserContext } from './context/User';
import { Link } from "react-router-dom";

function CategoryMap({ category, categories, setCategories }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [show, setShow] = useState(false)
    const [showWording, setShowWording] = useState("Show Products")

    const productDropDown = category.products.map(product => 
        <li key={product.id}><Link className='navbarlink' to={`/products/${product.id}`}>{product.name}</Link></li>
    )

    function showProducts() {
        setShow(!show)
        setShowWording("Hide Products")
    }


    return (
        <div>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <button onClick={showProducts}>{showWording}</button>
            {show ? productDropDown : null}
            {show ? null : <br/>}
            <br/>
        </div>
    )
}

export default CategoryMap;