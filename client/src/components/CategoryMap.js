import '../App.css'
import React, { useContext } from "react";
import { UserContext } from './context/User';

function CategoryMap({ category, categories, setCategories }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    //add a drop down for products in category
    //add serializer to show products within a given category

    return (
        <div>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <br/>
            <br/>
        </div>
    )
}

export default CategoryMap;