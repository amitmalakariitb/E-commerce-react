
import './product_details/pd.css'
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from "axios";

import { Rate } from "antd";



const ProductDetails = () => {

    const [data, setData] = useState<AxiosResponse | null | void>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/product/products/1'); // need to update this link
        //   console.log(product)
        //   const result = await response.json();
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
      console.log(data)
    }, []);

    
    return (
        
        <div>

            <div className="box">
                <div className="content">
                    {/* <div className="img-box">
                        <img src="./product_details/tree.jpg" alt="" />
                    </div> */}

                    <div className="img-box">
                        {/* Main image */}
                        <img src="./product_details/main.jpg" alt="" className="main-img" />
                        {/* Smaller images */}
                        <div className="small-img-box">
                            {['./product_details/small1.jpg', './product_details/small2.jpg', './product_details/small3.jpg'].map((src, index) => (
                                <img key={index} src={src} alt="" className="small-img" />
                            ))}
                        </div>
                    </div>

                    <div className="details">
                        <h3>{data.prod_name}</h3>
                        <p className="brand">BrandName</p>
                        <p className="description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed labore, doloremque placeat libero expedita aspernatur tempore possimus vero veniam repudiandae quos, voluptatibus exercitationem.
                        </p>
                        {/* ratings implementation */}
                        <div className='rate-component'>
                            <Rate defaultValue={3} disabled />
                            {/* write the value from api in place of default value */}
                        </div>
                        <p className="price">Price: Rs. 2000</p>
                        
        

                        <button className="Add_to_cart" id="Add-to-cart">Add to cart</button>
                        <br />
                        <button className="Buy" id="Buy">Buy</button>
                    </div>
                </div>

                <div className="reviews">
                    <div className="review-form">
                        <h3>Write a Review</h3>
                        {/* ratings implementation */}
                        <div className='rate-component'>
                            <Rate allowClear={false} />
                            {/* get the value from the customer and return it */}
                        </div>
                        <textarea rows={5}
                            placeholder="Share your thoughts..."
                        // value={newReview}
                        // onChange={handleReviewChange}
                        ></textarea>
                        <button className="submit-review" >
                            Submit Review
                        </button>
                    </div>
                </div>
                <div className="reviews" >
                    <h3>Customer Reviews</h3>
                    <div>
                        <div className='rate-component'>
                            <Rate defaultValue={3} disabled />
                            {/* write the value from api in place of default value for the */}
                        </div>
                    </div>
                    <div className='customer_reviews'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic labore doloribus beatae, possimus sunt in recusandae consequatur porro facere aliquid totam expedita nihil?</p>
                        <p className="customer-name">Name</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails