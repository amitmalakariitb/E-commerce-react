import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemContainer from './ItemContainer';
import "../../assets/CartPage.css";



const MyCart: React.FC = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function getCartItems() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/orders/view_cart/1');
        // Assuming response.data.cart_items is an array
        setCartItems(response.data.cart_items);
      } catch (error) {
        console.error(error);
      }
    }

    getCartItems();
  }, []);

  const totalCost = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleItemRemove = (itemId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.cart_item_id !== itemId));
  };


  const handleCheckoutClick = () => {
    const requestData = {
        user: "1",
        address: "1"
    };

    axios.post("http://127.0.0.1:8000/api/orders/checkout/", requestData)
        .then(response => {
            // Handle successful response
            console.log(response.data);
            // Go to next page
            window.location.href = "https://www.google.co.in/webhp?tab=mw";
        })
        .catch(error => {
            // Handle error
            console.error("Error occurred during API call:", error);
        });
  };

  

  return (
    <>
    <div className='order'>
      <div id="add_items">
        <p>Add more here</p>
        <button id="click">
          <img src="../images/add-to-cart-3046.svg" alt="pic" />
        </button>
      </div>
      <div id="footer">
        <button id="click" onClick={handleCheckoutClick}>
          <img src="/images/buy.png" alt="order" height="60vw" width="100vw"/>
        </button>
        <div className='Total'>
        <div id="amount">
          $<b>{totalCost.toFixed(2)}</b>
          <br/>
        </div>
        <p>
          <b>Total:</b>({cartItems.length} items)
        </p>
        </div>
      </div>
      </div>
      {/* Render other UI elements */}
      <div id="main_content">
        {/* Map over cartItems and render ItemContainer for each item */}
        {cartItems.map((item) => (
          <ItemContainer
            product_id={item.product_id} // Use a unique key for each item
            product_img={item.product_img}
            product_name={item.product_name}
            price={item.price} 
            quantity={item.quantity}
            rating={item.average_rating} 
            color={''}
            style={''}
            available={!item.is_out_of_stock}
            cart_item_id={item.cart_item_id}
            description={item.description}
            onItemRemove={handleItemRemove}
            />
        ))}
      </div>
    </>
  );
}

export default MyCart;

