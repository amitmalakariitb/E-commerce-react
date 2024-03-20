import React from 'react';
import "../../assets/SellerPage.css";
import SellObjects from './SellObjects';

const SellerPage: React.FC = () => {

    
  return (
    <>
      <div id="page">
        <div className='head'>
          <h1>Approve Customer Orders</h1>
          <div className='status'>
          <p>Total orders: 24</p>
          <p className='currentstate'>
            <span>Approved:0</span>   |   <span>Denied:0</span>   |   <span>Pending:24</span>
          </p>
          </div>
        </div>
        <div id='objects'>
          <SellObjects  
          color='copper'
          product_img='./images/flower.jpg'
          product_name='Samsung 7kg Top Load Fully Automatic Washing Machine'
          quantity={2}
          price={3546}
          rating={3}
          style='Top Load'
          available= {true}
          description ='with In-built Heater'
          />
          <SellObjects  
          color='copper'
          product_img='./images/flower.jpg'
          product_name='Samsung 7kg Top Load Fully Automatic Washing Machine'
          quantity={2}
          price={3546}
          rating={3}
          style='Top Load'
          available= {true}
          description ='with In-built Heater'
          />
          <SellObjects  
          color='copper'
          product_img='./images/flower.jpg'
          product_name='Samsung 7kg Top Load Fully Automatic Washing Machine'
          quantity={2}
          price={3546}
          rating={3}
          style='Top Load'
          available= {true}
          description ='with In-built Heater'
          />
          <SellObjects  
          color='copper'
          product_img='./images/flower.jpg'
          product_name='Samsung 7kg Top Load Fully Automatic Washing Machine'
          quantity={2}
          price={3546}
          rating={3}
          style='Top Load'
          available= {true}
          description ='with In-built Heater'
          />
        </div>
      </div>
    </>
  );
};

export default SellerPage;
