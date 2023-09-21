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
import ProductMap from "./components/ProductMap";
import IndividualProduct from "./components/IndividualProduct";

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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup users={users} setUsers={setUsers}/>} />
          <Route path="/categories" element={<Categories categories={getCategories} setCategories={setCategories}/>} />
          <Route path="/products/*" element={<Products products={products} setProducts={setProducts}/>} />
          <Route path="/products/:id" element={<IndividualProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;