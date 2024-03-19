import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/LoginandRegister/login';
import SignUp from './Components/LoginandRegister/register';
import Home from './Components/HomePage/home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<SignUp/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
