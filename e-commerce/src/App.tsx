
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login and Register/login';
import SignUp from './Components/Login and Register/register';
import Home from './Components/Home Page/home';
import Confirm from './Components/Home Page/confirm';

import MyCart from "./components/AddtoCart/CartPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<SignUp/>} />
          <Route path="/confirm" element={<Confirm/>} />
        <Route path="/cartpage" element={<MyCart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
