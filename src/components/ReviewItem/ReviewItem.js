import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product}) => {
    const {name, quantity, price,img}=product
    return (
        <div className='review-item'>
            <img src={img} alt="" srcset="" />
            <div className='item-details-container'>
            <div className='item-details'>
                <p>{name}</p>
                <p><small>Price:{price}</small></p>
                <p><small>Quantity:{quantity}</small></p>
            </div>
            <div className='delete-btn'>
                <button>Delete</button>
            </div>
            </div>
        </div>
    );
};

export default ReviewItem;