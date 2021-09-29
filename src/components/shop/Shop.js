import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [displyproduct, setDisplayproduct] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayproduct(data)
            })
    }, [])

    useEffect(() => {
        // console.log('data')
        if (products.length) {
            const saveitem = getStoredCart()
            const addcart = [];
            for (const key in saveitem) {
                const addedproduct = products.find(pro => pro.key === key)
                if (addedproduct) {
                    const quantity = saveitem[key];
                    addedproduct.quantity = quantity;
                    // console.log(addedproduct)
                    // console.log(quantity);
                    addcart.push(addedproduct);
                }

            }

            setCart(addcart)
        }
    }

        , [products])

    const Addhandler = item => {
        const newCart = [...cart, item]
        setCart(newCart)
        // console.log(products);
        addToDb(item.key)
    }

    const handlar = event => {
        const searchtext = event.target.value;
        // const lowarcase = searchtext.toLowerCase()
        const matchproduct = products.filter(product => product.name.toLowerCase().includes(searchtext.toLowerCase()))
        setDisplayproduct(matchproduct);
        console.log(matchproduct.length)


    }
    return (
        <div>
            <div style={{ textAlign: 'center', backgroundColor: 'black', padding: '7px', }}>
                <input className='search-field'
                    onChange={handlar}
                    placeholder='search here' type="text" />
            </div>

            <div className="product-container">
                <div className="shop-container">
                    {
                        displyproduct.map(product => <Product
                            key={product.key}
                            product={product}
                            handler={Addhandler}>
                        </Product>)
                    }

                </div>
                <div className="count-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;