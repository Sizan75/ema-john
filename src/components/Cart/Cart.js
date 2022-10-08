import React from 'react';
import './Cart.css';
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = (props) => {
    const { cart, clearCart, children } = props;
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
       <div>
         <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>

            <button className='btn-clear' onClick={clearCart}>Clear Cart 
            <FontAwesomeIcon className='delete-icon-cart' icon={faTrashAlt}></FontAwesomeIcon>
            </button>
            
        </div>
        {children}
       </div>
    );
};

export default Cart;