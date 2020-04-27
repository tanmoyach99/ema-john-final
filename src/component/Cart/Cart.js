import React  from 'react';
//import { useAuth } from '../login/Use-auth';

const Cart = (props) => {
    const cart = props.cart;
    //const auth = useAuth();
    //console.log(auth.user);
    // const total = cart.reduce((total,Prd) => total+Prd.price,0);
    let total = 0;
    for(let i=0;i<cart.length;i++){
        const product = cart[i];
        total = total + product.price*product.quantity;// reduce functions detail form
    }
    let shipping = 0;
    if(total>100){
        shipping = 0;
    }
    else if(total>75){
        shipping = 4.99;
    }
    else if(total>0){
        shipping = 12.99;
    }
    const tax = total*0.5;

    
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);

    }
    return (
        <div>
            <h4>Order Summary  </h4>
            <p>Items Orderd : {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Shipping Cost: {formatNumber(shipping)}</p>
            <p>Tax Cost : {formatNumber(tax)} </p> 
            <p> Total Price : {formatNumber(total+shipping+tax)}</p>
            {props.children}
           
            
        </div>
    );
};

export default Cart;  