import '../App.css'
import React, { useContext, useState } from "react";
import { UserContext } from './context/User';
import CategoryMap from './CategoryMap';

function Categories({ categories, setCategories }) {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [filteredCategories, setFilteredCategories] = useState(categories)
  const [categoryFiltering, setCategoryFiltering] = useState("")

  const categoryMap = filteredCategories.sort((a, b) => a.name.localeCompare(b.name)).map(category => {
    return <CategoryMap key={category.id} category={category}/>
  })

  //add a filter

  return (
    <div>
      <form>
        Search by Category: <input className="formFields" type="text" name="categoryFiltering" value={categoryFiltering} onChange={} />
      </form>
      {categoryMap}
    </div>
  );
}

export default Categories;