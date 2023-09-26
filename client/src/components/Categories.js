import '../App.css'
import React, { useContext } from "react";
import { UserContext } from './context/User';
import CategoryMap from './CategoryMap';

function Categories({ categories, setCategories }) {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const categoryMap = categories.sort((a, b) => a.name.localeCompare(b.name)).map(category => {
    return <CategoryMap key={category.id} category={category}/>
  })


  return (
    <div>

    </div>
  );
}

export default Categories;