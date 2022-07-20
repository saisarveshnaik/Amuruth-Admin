import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import AddCategory from "./Screens/AddCategory";
import AddProduct from "./Screens/AddProduct";
import ProductsList from "./Screens/ProductsList";
import OrdersList from "./Screens/OrdersList";
import OrderDetails from "./Screens/OrderDetails";
import Brands  from "./Screens/Brands";
import MyAccount from "./Screens/MyAccount";


function App() {
  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route  path="/login" element={<Login />} />
            <Route  path="/register" element={<Register />} />
            <Route  path="/add-category" element={<AddCategory />} />
            <Route  path="/add-product" element={<AddProduct />} />
            <Route  path="/products-list" element={<ProductsList />} />
            <Route  path="/orders-list" element={<OrdersList />} />
            <Route  path="/order-details" element={<OrderDetails />} />
            <Route  path="/brands" element={<Brands />} />
            <Route  path="/account" element={<MyAccount />} />
          </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
