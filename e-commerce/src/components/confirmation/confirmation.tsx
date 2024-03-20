import '../../assets/order_confirmation.css'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Rate } from 'antd';
import { Link } from 'react-router-dom';

const Confirmation = () => {

    const date = new Date();

  // Array of month names
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Get the current month (0-indexed) from the date object
  const currentMonthIndex = date.getMonth();

  // Get the month name using the month index
  const currentMonthName = monthNames[currentMonthIndex];

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = date.getDay();
  // Get the name of the day of the week
  const dayName = daysOfWeek[dayOfWeek];


    return (
        <>
            <header className="header">
                <div className="header__container">
                    <img className="header__logo" src="/image.png" alt="Byte Mart Logo" />
                </div>
            </header>
            <div className='checkout-container'>
                <div className='address-details'>
                <div>
                    <button className='next-button' >Home</button>
                </div>
                <h3 className='address-heading'>Payment</h3>
                <div className='confirmation'>
                    <img src="/check.png" alt="" />
                    <img src="/Order Confirmed.png" alt="" />
                    <div className='confirmation-text'>
                    Your order has been successfully placed.
                    <br />
                    Thank you for shopping with Byte-Mart
                    </div>
                    <div className='arriving'>
                      <span >  Arriving by <span className='arriving-date'>{new Date().getDate()} {currentMonthName} , {dayName} </span> </span>
                    </div>
                </div>
                </div>
            <div className='new-address'>
                <div className='order-summary'>
                    
                </div>
            </div>
            </div>
        </>
    )
}

export default Confirmation