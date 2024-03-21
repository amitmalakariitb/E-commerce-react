import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/LoginandRegister/login';
import SignUp from './components/LoginandRegister/register';
import Home from './components/HomePage/home';
import MyCart from "./components/AddtoCart/CartPage";
import SellerPage from "./components/SellerSection/sellerPage";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/cartpage" element={<MyCart />} />
          <Route path="/sellerpage" element={<SellerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
