
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/LoginandRegister/login';
import SignUp from './components/LoginandRegister/register';
import Home from './components/HomePage/home';

import AddProduct from './components/SellerPortal/addproduct';
import EditProduct from './components/SellerPortal/editproduct';
import MyCart from "./components/AddtoCart/CartPage";
import SellerPage from "./components/SellerSection/sellerPage";
import ProductDetails from './components/product_details/pd';
import Checkout from './components/checkout/checkout';
import Confirmation from './components/confirmation/confirmation';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/cartpage" element={<MyCart />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/editproduct" element={<EditProduct />} />
          <Route path="/sellerpage" element={<SellerPage />} />
          <Route path="/product-details" Component={ProductDetails} />
          <Route path="/checkout" Component={Checkout} />
          <Route path='/confirmation' Component={Confirmation}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
