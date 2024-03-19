

import '../../assets/pd.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Rate } from 'antd';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

interface ReviewData {
    username:string;
    rating: number;
    review: string;
}

const ProductDetails = () => {
    const [data, setData] = useState<any | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/product/products/1');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        console.log(data)
    }, []);

  

    const [review, setReviewText] = useState('');
    const [selectedRating, setSelectedRating] = useState(0);
    const backendURL = 'http://127.0.0.1:8000/api/product/1/submit_review';

    const handleReviewSubmission = async (reviewData: ReviewData) => {
        try {
            const response = await axios.post(backendURL, reviewData);
            console.log('Review submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    const handleReviewSubmit = () => {
        const reviewData: ReviewData = {
            username: "udayd",
            rating: selectedRating,
            review: review,
        };
        handleReviewSubmission(reviewData);
    };

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div className='peoduct-details-body'>
            <div className="box">
                <div className="content">
                    <div className="img-box">
                        <img src="./product_details/main.jpg" alt="" className="main-img" />
                        <div className="small-img-box">
                            {['./product_details/small1.jpg', './product_details/small2.jpg', './product_details/small3.jpg'].map((src, index) => (
                                <img key={index} src={src} alt="" className="small-img" />
                            ))}
                        </div>
                    </div>
                    <div className="details">
                        <h3>{data.prod_name}</h3>
                        <p className="brand">{data.brand}</p>
                        <p className="description">{data.description}</p>
                        <div className='rate-component'>
                            <Rate defaultValue={data.average_rating} disabled />
                        </div>
                        <p className="price">Price: Rs. {data.price}</p>
                        <Link to="/add_to_cart">
                            <button className="Add_to_cart" id="Add-to-cart">Add to cart</button>
                        </Link>
                        <Link to="/checkout">
                        <button className="Buy" id="Buy">Buy</button>
                        </Link>
                    </div>
                </div>
                <div className="reviews">
                    <div className="review-form">
                        <h3>Write a Review</h3>
                        <div className='rate-component'>
                            <Rate allowClear={false} value={selectedRating} onChange={setSelectedRating} />
                        </div>
                        <textarea
                            rows={5}
                            placeholder="Share your thoughts..."
                            value={review}
                            onChange={(e) => setReviewText(e.target.value)}
                        ></textarea>
                        <button className="submit-review" onClick={handleReviewSubmit}>
                            Submit Review
                        </button>
                    </div>
                </div>
                <div className="reviews">
                    <h3>Customer Reviews</h3>
                    <div className='rate-component'>
                        <Rate defaultValue={3} disabled />
                    </div>
                    <div className='customer_reviews'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic labore doloribus beatae, possimus sunt in recusandae consequatur porro facere aliquid totam expedita nihil?</p>
                        <p className="customer-name">Name</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;
