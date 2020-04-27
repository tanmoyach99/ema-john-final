import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Details = () => {
    const {productKey} = useParams();
    const product = fakeData.find(product => product.key === productKey);
    // console.log(product)
    return (
        <div>
            <h2> Your Product Detail Is :</h2>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default Details;