import React from 'react';

const reviewItem = (props) => {
    console.log(props)
    const{name,quantity,key,price} = props.product
    const reviewItemStyle = {
        marginBottom: '15px',
        borderBottom: '1px solid lightgray',
        marginLeft: '150px', 
        paddingBottom: '10px'
    }
    return (
        <div style={ reviewItemStyle} className="review-item">
            <h5 className="productName">{name}</h5>
            <p> <b>QUANTITY:</b> {quantity}</p>
    <p><small>Price : ${price}</small></p>
            <br/>
            <button onClick = {() => props.removeProduct(key)} className="buy"> Remove YOUR item</button>
        </div>
    );
};

export default reviewItem;