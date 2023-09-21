import '../App.css'
import React, { useContext } from "react";
import { UserContext } from './context/User';

function IndividualProduct({ products, setProducts }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    return (
        <div>

        </div>
    )
}

export default IndividualProduct;