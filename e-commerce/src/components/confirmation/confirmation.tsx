import '../../assets/order_confirmation.css'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Rate } from 'antd';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Confirmation = () => {
    const [data, setData] = useState<any | null>(null);
    const location = useLocation();
    const productId = location.state.productId;
    const selectedAddress = location.state.selectedAddress;
    console.log(selectedAddress)
    console.log(productId)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/product/products/' + productId);
                setData(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


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
                        <Link to="/home">
                        <button className='next-button' >Home</button>
                        </Link>
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
                        <div className="c-img-box">
                            <img src="/watchimage.png" alt="" className="c-main-img" />
                        </div>
                        <div className="c-details">
                            <h3 className='c-product-name'>{data.prod_name}</h3>
                            <p className="c-brand">{data.brand}</p>
                            <div className='c-rate-component'>
                                <Rate defaultValue={data.average_rating} disabled />
                            </div>
                            <p className="c-price">Total amount : Rs. {data.price}</p>
                            <div className="c-address-details">
                                <p>Delivery Address:</p>
                                <p >{selectedAddress.door_no}, {selectedAddress.street},</p>
                                <p>{selectedAddress.city}, {selectedAddress.state},</p>
                                <p>{selectedAddress.pincode}</p>
                                <p>{selectedAddress.user}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Confirmation