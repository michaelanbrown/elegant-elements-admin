import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import './App.css';
import { UserContext } from "./components/context/User";
import { useState, useContext, useEffect } from 'react';
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Categories from "./components/Categories";
import Products from "./components/Products";
import IndividualProduct from "./components/IndividualProduct";
import Users from "./components/Users";

function App() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [errors, setErrors] = useState([])
  const [users, setUsers] = useState([])
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("/authorized_user")
    .then(res => {
      if (res.ok) {
        res.json()
        .then(user => {
          setCurrentUser(user)
          getCategories()
          getProducts()
        })
      } else {
        res.json().then(json => setErrors([json.error]))
      }
    })
  }, [])

  function getCategories() {
    fetch("/categories")
    .then((res) => {
      if(res.ok){
        res.json().then(setCategories)
      } else {
        res.json().then(json => setErrors([json.error]))
      }
    })
  }

  function getProducts() {
    fetch("/products")
    .then((res) => {
      if(res.ok){
        res.json().then(setProducts)
      } else {
        res.json().then(json => setErrors([json.error]))
      }
    })
  }

  return (
    <div className="App">  
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/users" element={Users}></Route>
          <Route path="/login" element={<Login getCategories={getCategories} getProducts={getProducts}/>} />
          <Route path="/signup" element={<Signup users={users} setUsers={setUsers} getCategories={getCategories} getProducts={getProducts}/>} />
          <Route path="/categories" element={<Categories categories={categories} setCategories={setCategories}/>} />
          <Route path="/products/*" element={<Products products={products} setProducts={setProducts}/>} />
          <Route path="/products/:id" element={<IndividualProduct products={products} setProducts={setProducts}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;