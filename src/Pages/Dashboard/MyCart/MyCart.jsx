import React from 'react';
import useCart from '../../../hooks/useCart';
import { stringify } from 'postcss';

const MyCart = () => {
    const [cart]=useCart();
    console.log(cart);
    const total= cart.reduce((sum,singleClasses)=> 
    parseInt(singleClasses.price) + sum, 0)
    return (
        <div>
            <h3>Total Items : {cart.length}</h3>
            <h3>Total Price : {total}</h3>
            <h2>My Cart</h2>
        </div>
    );
};

export default MyCart;