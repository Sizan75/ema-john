import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {products , previousCart}=useLoaderData();
    const [cart, setCart] = useState(previousCart)

    const handleRemoveItem = (id) => {
        const remainingItem = cart.filter(product => product._id !== id);
        setCart(remainingItem)
        removeFromDb(id)
    }

    
    const clearCart = () =>{
        setCart([])
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
               { cart.map(product => <ReviewItem
                key={product._id}
                product={product}
                handleRemoveItem={handleRemoveItem}
                >
                </ReviewItem>)
                }
                {
                   cart.length === 0 && <h1>No Product To Review.<Link to='/'>Shop More</Link></h1>
                }
            </div>
            <div className='cart-container'>
            <Cart 
            cart={cart}
            clearCart={clearCart}
            >
                <Link to='/shipping'>
                    <button >Proceed Shpping</button>
                </Link>
            </Cart>
            </div>
        </div>
    );
};

export default Orders;