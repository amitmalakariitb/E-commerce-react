

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
        console.log(response.data)
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
            <Link to="/confirmation">
            <button className='next-button'>Next</button>
            </Link>
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
            <label className='addressdetailstext'>House no., Bldg name</label>
            <input
            id='door_no'
              type="text"
              value={newAddress.door_no}
              onChange={(e) => setNewAddress({ ...newAddress, door_no: e.target.value })} 
              />
              <label className='addressdetailstext'>Street name, Area</label>
            <input
              type="text"
              value={newAddress.street}
              onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })} />
            <label className='addressdetailstext'>City</label>
            <input
              type="text"
              // placeholder="City"
              value={newAddress.city}
              onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
            />
            <label className='addressdetailstext'>State</label>
            <input
              type="text"
              // placeholder="State"
              value={newAddress.state}
              onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })} />
            <label className='addressdetailstext'>Pincode</label>
            <input
              type="number"
              // placeholder="Pincode"
              value={newAddress.pincode}
              onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })} />
            <label className='addressdetailstext'>Phone number</label>
            <input
              type="tel"
              placeholder="+91 |"
              value={newAddress.phone_number}
              onChange={(e) => setNewAddress({ ...newAddress, phone_number: e.target.value })} />
            <button className='add-button' onClick={handleNewAddressSubmit} > Add New Address</button>
          </form>
        </div>

      </div>
      <Footer></Footer>
    </>
  );
};

export default Checkout;
