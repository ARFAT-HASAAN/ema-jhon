import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // const icon = <FontAwesomeIcon icon={faShoppingCart} />
    // console.log(props)
    const { name, price, img, seller, stock, star } = props.product
    return (
        <div className="item-container" >

            <div className='prouduct-img'>
                <img src={img} alt="" />
            </div>

            <div>
                <h4 className='head'>{name}</h4>
                <p>by{seller}</p>
                <p>price{price}</p>
                <p><small>only{stock}left in stock - order soon</small> </p>

                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star fa-2x icon-color"
                    fullSymbol="fas fa-star fa-2x icon-color"
                >

                </Rating>
                <br />


                <button onClick={() => props.handler(props.product)} className='btn'><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>


            </div>


        </div>
    );
};

export default Product;