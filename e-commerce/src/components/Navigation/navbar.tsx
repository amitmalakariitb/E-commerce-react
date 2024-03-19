
//import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './searchbar';
import SearchBar from './searchbar';

const Navbar = () => {
  return (
    <>
    <nav className="navbar sticky-top navbar-expand-lg">
      <div className="navbar-nav container-fluid">
        <div id="brand">
        <b className="Company_name">BYTE<br/> MART</b>
        </div>
        <SearchBar />
        {/* Right-most content outside collapsible section */}
        <span id="text">
          <ul id="list">
            <button id='other'>
            <li className="options">
              Wishlist
              <a href=""><img src="/images/heart-red.svg" alt="Heart"></img></a>
            </li>  
            </button>
            <button  id='cart'>
            <li className="options">
              Cart
              <a href="/AddtoCart/CartPage.tsx"><img src="/images/cart3-white.svg" width="25px" alt="Cart"></img></a>
            </li>  
            </button>
            <button id='other'>
            <li className="options">
              Account
              <a href=""><img src="/images/user.svg" alt="User"></img></a>
            </li>
            </button>
          </ul>
        </span>
      </div>
    </nav>
    </>
  );
};

export default Navbar;



