
// import Footer from './components/footer/Footer'
import './checkout.css'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Rate } from 'antd';
import { Link } from 'react-router-dom';

interface Address {
  customer_name: string;
  street: string;
  city: string;
  phone_number: string;
}

interface OrderItem {
  prod_name: string;
  brand: string;
  price: number;
  prod_img: string;
}


interface ProductData {
  customer_name: string;
  customer_address: string;
  prod_name: string;
  brand: string;
  price: number;
  prod_img: string;
  total_price: number
  addresses: Address[];
  order_items: OrderItem[];
}


const Checkout = () => {
  const [data, setData] = useState<any | null>(null);

  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const response = await axios.get('http://127.0.0.1:8000/api/product/products/1');
  //             setData(response.data);
  //         } catch (error) {
  //             console.error('Error fetching data:', error);
  //         }
  //     };

  //     fetchData();
  // }, []);

  // if (!data) {
  //     return <p>Loading...</p>;
  // }


  useEffect(() => {
    // Simulating data fetching from the backend

    const fakeData: ProductData = {
      addresses: [
        {
          customer_name: "Abhay",
          street: "123 street",
          city: "City Name",
          phone_number: "1234567890"
        },
        {
          customer_name: "Abhay",
          street: "123 street",
          city: "City Name",
          phone_number: "1234567890"
        },        {
          customer_name: "Abhay",
          street: "123 street",
          city: "City Name",
          phone_number: "1234567890"
        }
        // Add more addresses if needed
      ],
      order_items: [
        {
          prod_name: 'Test Product',
          brand: 'Test Brand',
          price: 999.99,
          prod_img: 'https://example.com/test-product.jpg'
        },
        // Add more order items if needed
      ],
      customer_name: "Abhay",
      customer_address: "123 street, helloworld how are you",
      prod_name: 'Test Product',
      brand: 'Test Brand',
      price: 999.99,
      prod_img: 'https://example.com/test-product.jpg',
      total_price: 100
    };

    setData(fakeData);
  }, []);


  if (!data) {
    return <p>Loading...</p>;
  }

  // const [isChecked, setIsChecked] = useState(false);

  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked);
  // };

  return (

    <div className='checkout-container'>

      <div className='address-details'>
        <div>
          <button className='next-button'>Next</button>
        </div>
        <h3 className='address-heading'>Select Delivery Address</h3>

        <div className='address'>
          {data.addresses.map((address, index) => (
            <div key={index} className='address-card'>
              
                {/* <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                /> */}
                <div className='address-checkbox'>
                <input  type="checkbox" />
                </div>
                <div className='customer-address-details'>
                <p className='name'>{address.customer_name}</p>
                <p>{address.street}</p>
                <p>{address.city},{address.state}</p>
                <p>{address.pincode}</p>
                <p>Phone: {address.phone_number}</p>
                </div>
              
            </div>
          ))}
        </div>
      </div>

      <div className='new-address'>
        <h3 className='new-address-heading'>New Address</h3>
        <form>
          <input type="text" placeholder="House no., Bldg name" />
          <input type="text" placeholder="Street name, Area" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <input type="number" placeholder="Pincode" />
          <input type="tel" placeholder="Phone number" />
          <button className='add-button'><i className='plus-icon'></i> Add New Address</button>
        </form>
      </div>

    </div>


    // <div className='checkout-container'>
    //     <div className='container-checkout'>
    //         <div className='address-details'>
    //             <h3>Select Delivery Address</h3>
    //             <div className='address'>
    //                 {/* Use map to render multiple addresses */}
    //                 {data.addresses.map((address, index) => (
    //                     <div key={index} className='address-card'>
    //                         <div className='address-header'>
    //                             <p className='name'>{address.customer_name}</p>
    //                             <p>{address.street}, {address.city}</p>
    //                             <p>Phone: {address.phone_number}</p>
    //                         </div>
    //                         <button>Edit Address</button>
    //                     </div>
    //                 ))}
    //                 {/* Form to add a new address */}
    //                 <form>
    //                     <input type="text" placeholder="House no, Bldg name"/>
    //                     <input type="text" placeholder="Street name, Area"/>
    //                     <input type="text" placeholder="City"/>
    //                     <input type="text" placeholder="State"/>
    //                     <input type="number" placeholder="Pincode"/>
    //                     <input type="tel" placeholder="Phone number"/>
    //                     <button>Add New Address</button>
    //                 </form>
    //             </div>
    //         </div>
    //         {/* <div className='order-summary'>
    //             <h3>Order Summary</h3>
    //             <div className='order-items'> */}
    //                 {/* Use map to render multiple order items */}
    //                 {/* {data.order_items.map((item, index) => (
    //                     <div key={index} className='order-item'>
    //                         <img src={item.prod_img} alt={item.prod_name} />
    //                         <div className='item-details'>
    //                             <p className='name'>{item.prod_name}</p>
    //                             <p>Brand: {item.brand}</p>
    //                             <p>Price: Rs. {item.price}</p>
    //                         </div>
    //                     </div>
    //                 ))}
    //             </div>
    //             <div className='total-price'>
    //                 <p>Total Price: Rs. {data.total_price}</p>
    //             </div> */}
    //         {/* </div> */}
    // //     </div>
    // // </div>


  );

};

export default Checkout;