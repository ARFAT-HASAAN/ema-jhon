import React from 'react';
import './Cart.css'

const Cart = (props) => {

    // // console.log(props.cart)

    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }

        total = total + product.price * product.quantity
        totalQuantity = totalQuantity + product.quantity;
        // console.log(totalQuantity);

    }

    // console.log(cart)

    // const total = cart.reduce((prevValue, currentValue) => prevValue + currentValue.price, 0)

    // const itemPrice = cart.map(price => price)
    // const price = itemPrice;
    const shiping = total > 0 ? 15 : 0;
    const tax = (total + shiping) * 0.10;

    // let total = 0;
    // for (const product of cart) {
    //     total = total + product.price
    // }

    return (
        <div>
            <h2>Order Summery</h2>
            <h2>Items ordered:{totalQuantity}</h2>
            {/* <p>
                Price:{price} </p> */}
            <p>Shipping & Handling:{shiping}</p>
            <p>Total tax:{tax.toFixed(2)} </p>
            <br />
            <p>total price: {total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;