import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/LoginandRegister/login';
import SignUp from './Components/LoginandRegister/register';
import Home from './Components/HomePage/home';
import MyCart from './Components/AddtoCart/CartPage';
import AddProduct from './Components/SellerPortal/addproduct';
import EditProduct from './Components/SellerPortal/editproduct';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/cartpage" element={<MyCart />} />
          <Route path="/addproduct" element={<AddProduct />}/>
          <Route path="/editproduct" element={<EditProduct />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
