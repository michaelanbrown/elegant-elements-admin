import '../App.css'
import React, { useContext } from "react";
import { UserContext } from './context/User';

function CategoryMap({ category, categories, setCategories }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [show, setShow] = useState(false)

    //add a drop down for products in category
    //each drop down item will direct you to the individual products page for that product

    const productDropDown = category.products.map(product => {
        <li>{product.name}</li>
    })

    function onClick() {

    }

    return (
        <div>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <button>Show Products</button>
            <br/>
            <br/>
        </div>
    )
}

export default CategoryMap;