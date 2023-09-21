import '../App.css'
import React, { useContext } from "react";
import { UserContext } from './context/User';

function IndividualProduct() {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    return (
        <div>
            
        </div>
    )
}

export default IndividualProduct;