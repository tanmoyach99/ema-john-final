import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
   // console.log(props.product);
    const {img,name,seller,price,stock,key} = props.product
    return (
      <div className="product">
          <div>
              <img src={img} alt=""/>
          </div>
          <div>
               <h4 className="productName"><Link to={"/"+key} >{name}</Link></h4>
              <p><small>By : <b>{seller}</b></small></p>
              <br/>
              <p style={{color:'red'}}> {price}$</p>
          
              <p>only {stock} products left in stock - order soon</p>
            {props.showAddToCart === true && <button onClick={() => props.handleAddProduct(props.product)} className="buy">Add to Cart</button>}
          </div>
          
          
      </div>
    );
};

export default Product;