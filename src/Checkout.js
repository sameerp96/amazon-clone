import React from 'react';
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import checkout_img from "./images/checkout_ad.JPG";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";


function Checkout() {
    const [{ basket }] = useStateValue(); 
    
    return (
        <div className="checkout">
           
            <div className="checkout__left">
            <img className="checkout__ad" src= {checkout_img} alt=""/>
            
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Basket is empty</h2>
                    <p>You have no items in the basket. to buy one or more items, click "Add to basket" next to the item.</p>
                </div>
            ) : ( 
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map((item) => (
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        
                        />
                    ))}
                </div>
            )}
            </div>
            
            {basket.length > 0 && (
                <div className="checkout__right">
                    {/* <h1>subtotal</h1> */}
                    <Subtotal/>
                </div>
            )}

        </div>
    );
}

export default Checkout
