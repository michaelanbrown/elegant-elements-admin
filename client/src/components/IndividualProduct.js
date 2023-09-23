import '../App.css'
import React, { useContext, useEffect } from "react";
import { UserContext } from './context/User';
import { useParams } from 'react-router-dom';

function IndividualProduct({ products, setProducts }) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [product, setProduct] = useState("")
    const [errors, setErrors] = useState([])
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`/${id}`)
        .then(res => {
           if (res.ok) {
            res.json()
            .then(product => {
              setProduct(product)  
            })
           } else {
            res.json().then(json => setErrors([json.error]))
           }
        })
      }, [])

    return (
        <div>

        </div>
    )
}

export default IndividualProduct;