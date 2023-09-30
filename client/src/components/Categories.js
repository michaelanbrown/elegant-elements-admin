import '../App.css'
import React, { useContext, useState } from "react";
import { UserContext } from './context/User';
import CategoryMap from './CategoryMap';

function Categories({ categories, setCategories }) {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [filteredCategories, setFilteredCategories] = useState(categories)

  const categoryMap = filteredCategories.sort((a, b) => a.name.localeCompare(b.name)).map(category => {
    return <CategoryMap key={category.id} category={category}/>
  })

  //add a filter

  return (
    <div>
      {categoryMap}
    </div>
  );
}

export default Categories;