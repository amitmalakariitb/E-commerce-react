
// // import Footer from './components/footer/Footer'
// import '../../assets/checkout.css'
// import { useEffect, useState } from 'react';
// import axios from 'axios'
// import { Rate } from 'antd';
// import { Link } from 'react-router-dom';

// // interface Address {
// //   customer_name: string;
// //   street: string;
// //   city: string;
// //   phone_number: string;
// // }

// // interface OrderItem {
// //   prod_name: string;
// //   brand: string;
// //   price: number;
// //   prod_img: string;
// // }


// // interface ProductData {
// //   customer_name: string;
// //   customer_address: string;
// //   prod_name: string;
// //   brand: string;
// //   price: number;
// //   prod_img: string;
// //   total_price: number
// //   addresses: Address[];
// //   order_items: OrderItem[];
// // }


// const Checkout = () => {
//   const [data, setData] = useState<any | null>(null);

//   useEffect(() => {
//       const fetchData = async () => {
//           try {
//               const response = await axios.get('http://127.0.0.1:8000/api/user/view_saved_addresses/1');
//               setData(response.data);
//           } catch (error) {
//               console.error('Error fetching data:', error);
//           }
//       };

//       fetchData();
//   }, []);

//   // if (!data) {
//   //     return <p>Loading...</p>;
//   // }


//   // useEffect(() => {
//   //   // Simulating data fetching from the backend

//   //   const fakeData: ProductData = {
//   //     addresses: [
//   //       {
//   //         customer_name: "Abhay",
//   //         street: "123 street",
//   //         city: "City Name",
//   //         phone_number: "1234567890"
//   //       },
//   //       {
//   //         customer_name: "Abhay",
//   //         street: "123 street",
//   //         city: "City Name",
//   //         phone_number: "1234567890"
//   //       },        {
//   //         customer_name: "Abhay",
//   //         street: "123 street",
//   //         city: "City Name",
//   //         phone_number: "1234567890"
//   //       }
//   //       // Add more addresses if needed
//   //     ],
//   //     order_items: [
//   //       {
//   //         prod_name: 'Test Product',
//   //         brand: 'Test Brand',
//   //         price: 999.99,
//   //         prod_img: 'https://example.com/test-product.jpg'
//   //       },
//   //       // Add more order items if needed
//   //     ],
//   //     customer_name: "Abhay",
//   //     customer_address: "123 street, helloworld how are you",
//   //     prod_name: 'Test Product',
//   //     brand: 'Test Brand',
//   //     price: 999.99,
//   //     prod_img: 'https://example.com/test-product.jpg',
//   //     total_price: 100
//   //   };

//   //   setData(fakeData);
//   // }, []);


//   const [selectedAddresses, setSelectedAddresses] = useState([]);

//   const handleAddressSelect = (index) => {
//     // Check if the address is already selected
//     if (selectedAddresses.includes(index)) {
//       // If selected, remove it from the list
//       setSelectedAddresses(selectedAddresses.filter((item) => item !== index));
//     } else {
//       // If not selected, add it to the list
//       setSelectedAddresses([...selectedAddresses, index]);
//     }
//   };


//   if (!data) {
//     return <p>Loading...</p>;
//   }


//   return (

//     <div className='checkout-container'>

//       <div className='address-details'>
//         <div>
//           <button className='next-button'>Next</button>
//         </div>
//         <h3 className='address-heading'>Select Delivery Address</h3>

//         <div className='address'>
//           {data.addresses.map((address, index) => (
//             <div key={index} className='address-card'>

//                 {/* <input
//                   type="checkbox"
//                   checked={isChecked}
//                   onChange={handleCheckboxChange}
//                 /> */}
//                 <div className='address-checkbox'>
//                 <input  type="checkbox" />
//                 </div>
//                 <div className='customer-address-details'>
//                 <p className='name'>{address.customer_name}</p>
//                 <p>{address.street}</p>
//                 <p>{address.city},{address.state}</p>
//                 <p>{address.pincode}</p>
//                 <p>Phone: {address.phone_number}</p>
//                 </div>

//             </div>
//           ))}
//         </div>
//       </div>

//       <div className='new-address'>
//         <h3 className='new-address-heading'>New Address</h3>
//         <form>
//           <input type="text" placeholder="House no., Bldg name" />
//           <input type="text" placeholder="Street name, Area" />
//           <input type="text" placeholder="City" />
//           <input type="text" placeholder="State" />
//           <input type="number" placeholder="Pincode" />
//           <input type="tel" placeholder="Phone number" />
//           <button className='add-button'><i className='plus-icon'></i> Add New Address</button>
//         </form>
//       </div>

//     </div>


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


//   );

// };

// export default Checkout;

import '../../assets/checkout.css'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Rate } from 'antd';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

interface Address {
  user: number;
  door_no: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  phone_number: string;
}

const Checkout = () => {
  const [data, setData] = useState<any | null>(null);
  // const [selectedAddresses, setSelectedAddresses] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user/view_saved_addresses/1');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [selectedAddress, setSelectedAddress] = useState<number | null>(null);

  const handleAddressSelect = (index: number) => {
    setSelectedAddress(index);
  };

  const [newAddress, setNewAddress] = useState<Address>({
    user: 1,
    door_no: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    phone_number: '',
  });

  const handleNewAddressSubmit = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user/add_new_address/', newAddress);
      console.log('New address added successfully:', response.data);
    } catch (error) {
      console.error('Error adding new address:', error);
    }
  };


  if (!data) {
    return <p>Loading...</p>;
  }

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
            <button className='next-button'>Next</button>
          </div>
          <h3 className='address-heading'>Select Delivery Address</h3>

          <div className='address'>
            {data && data.map((address: Address, index: number) => (
              <div key={index} className='address-card'>
                <label>
                  {/* <input
                  type="checkbox"
                  checked={selectedAddresses.includes(index)}
                  onChange={() => handleAddressSelect(index)}
                  /> */}
                  <input
                    type="radio" // change "checkbox" to "radio"
                    checked={selectedAddress === index}
                    onChange={() => handleAddressSelect(index)}
                  />
                </label>
                {/* Render address information here */}
                <div className='customer-address-details'>
                  <p className='name'>Uday Darade</p>
                  <p>{address.door_no}, {address.street}, </p>
                  <p>{address.city},{address.state}</p>
                  <p>{address.pincode}</p>
                  <p>Phone: 9999999999</p>
                </div>
              </div>
            ))}
          </div>


        </div>
        <div className='new-address'>
          <h3 className='new-address-heading'>New Address</h3>
          <form>
            <input
             type="text"
             placeholder="House no., Bldg name"
             value={newAddress.door_no}
              onChange={(e) => setNewAddress({ ...newAddress, door_no: e.target.value })} />
            <input 
            type="text" 
            placeholder="Street name, Area"
            value={newAddress.street}
            onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value})} />
            <input 
            type="text" 
            placeholder="City"
            value={newAddress.city}
            onChange={(e)=>setNewAddress({...newAddress, city: e.target.value})} 
            />
            <input 
            type="text" 
            placeholder="State"
            value={newAddress.state}
            onChange={(e)=>setNewAddress({...newAddress,state: e.target.value})} />
            <input 
            type="number" 
            placeholder="Pincode"
            value={newAddress.pincode}
            onChange={(e)=>setNewAddress({...newAddress,pincode: e.target.value})} />
            <input 
            type="tel" 
            placeholder="Phone number"
            value={newAddress.phone_number}
            onChange={(e)=>setNewAddress({...newAddress,phone_number: e.target.value})} />
            <button className='add-button' onClick={handleNewAddressSubmit} > Add New Address</button>
          </form>
        </div>

      </div>
      <Footer></Footer>
    </>
  );
};

export default Checkout;
