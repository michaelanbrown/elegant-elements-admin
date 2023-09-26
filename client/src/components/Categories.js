import '../App.css'
import React, { useContext } from "react";
import { UserContext } from './context/User';
import CategoryMap from './CategoryMap';

function Categories({ categories, setCategories }) {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <div>

    </div>
  );
}

export default Categories;