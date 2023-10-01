import '../App.css'
import React, { useContext, useState } from "react";
import { UserContext } from './context/User';
import CategoryMap from './CategoryMap';

function Categories({ categories, setCategories }) {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [categoryFiltering, setCategoryFiltering] = useState("")

  const filteredCategories = categories.filter(category => category.name.toLowerCase().indexOf(categoryFiltering.toLowerCase()) > -1)

  const categoryMap = filteredCategories.sort((a, b) => a.name.localeCompare(b.name)).map(category => {
    return <CategoryMap key={category.id} category={category}/>
  })


  function handleChange(e) {
    setCategoryFiltering(e.target.value)
  }

  return (
    <div>
      <form>
        Search by Category: <input className="formFields" type="text" name="categoryFiltering" value={categoryFiltering} onChange={handleChange} />
      </form>
      {categoryMap}
    </div>
  );
}

export default Categories;