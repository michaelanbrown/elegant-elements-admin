import '../App.css'
import React, { useContext } from "react";
import { UserContext } from './context/User';
import { NavLink } from "react-router-dom";

function CategoryMap({ category, categories, setCategories }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [show, setShow] = useState(false)

    //check drop down for products in category
    //each drop down item will direct you to the individual products page for that product

    const productDropDown = category.products.map(product => {
        <li>{product.name}</li>
    })

    function showProducts() {
        setShow(!show)
    }

    return (
        <div>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <button onClick={showProducts}>Show Products</button>
            {show ? productDropDown : null}
            <br/>
            <br/>
        </div>
    )
}

export default CategoryMap;