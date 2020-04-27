import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../reviewItem/reviewItem';
import Cart from '../Cart/Cart';
import orderImage from '../../images/giphy.gif'
import { Link } from 'react-router-dom';
import { auth } from 'firebase';
import { useAuth } from '../Login/useAuth';

const Review = () => {
    const [cart,setCart] = useState([]);
    const[orderPlaced,setOrderPlaced] = useState(false);
    const auth= useAuth();
    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }
    const removeProduct = (productKey) =>{
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map( key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    },[])
    let thanks;
    if(orderPlaced){
        thanks= <img src={orderImage} alt=""/>
    }
    return (
        <div className= "shop-container">
            <div className= "product-container">
               
               {cart.map(pd =>  <ReviewItem 
               key ={pd.key}
               removeProduct = {removeProduct}
               product ={pd}></ReviewItem>)}
               {thanks}
               {
                   !cart.length && <h1> <b>Thanks</b> for visiting our shop. you have not bought anything. <a href="/shop">keep shopping</a> </h1>
               }
            </div>
           
            <div className= " cart-container">
                <Cart cart = {cart}> 
                <Link  to="/shipment">
                    {auth.user?<button className="buy">proceed</button>:
                    <button className='buy'>proceed login</button>
                    }
                    </Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Review;