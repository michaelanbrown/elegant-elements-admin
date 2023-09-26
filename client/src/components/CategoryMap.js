import '../App.css'
import React, { useContext } from "react";
import { UserContext } from './context/User';

function CategoryMap({ categories, setCategories }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    return (
        <div>

        </div>
    )
}

export default CategoryMap;