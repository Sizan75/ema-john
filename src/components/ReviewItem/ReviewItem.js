import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product}) => {
    const {name, quantity, price,img, shipping}=product
    return (
        <div className='review-item'>
            <img src={img} alt="" srcset="" />
            <div className='item-details-container'>
            <div className='item-details'>
                <p>{name}</p>
                <p><small>Price:${price}</small></p>
                <p><small>Shipping:${shipping}</small></p>
                <p><small>Quantity:{quantity}</small></p>
            </div>
            <div className='delete-btn'>
                <button className='delete-btn'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
            </div>
            </div>
        </div>
    );
};

export default ReviewItem;