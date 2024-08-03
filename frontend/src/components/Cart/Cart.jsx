import React, { useEffect, useState } from 'react'
import { UseContext } from '../../context/Context'
import img from '../../assets/cart.png'
import { makePaymentRequest } from '../../utils/api'
import {loadStripe} from '@stripe/stripe-js';

const Cart = ({ setShowCart }) => {
    const { cartItems, handleCartQunatity, cartSubTotal ,handleRemoveFromCart } = UseContext();
    const stripePromise = loadStripe('pk_test_51PdJChKrRP6Lw6VREogJvHH78fTIOeLgsmt0s6IPNtTTdG0bX9cTXiSMrX74uTNLivfKnn5Lzl4B99gBXnrAwGek00iofc4S6E');

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makePaymentRequest.post('/api/orders', {
                products: cartItems,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        } catch (error) {
            console.log("errror detail" , error);  // Uncomment to see the error in console
        }
        console.log('clicked');
    };
    
    
    return (
        <>

            {!cartItems?.length &&
                <div className="fixed right-0 top-0 z-50 flex items-center justify-center bg-white  ">
                    <div className="bg-card text-card-foreground w-full max-w-[28rem] mx-auto rounded-lg shadow-lg min-h-[400px]">
                        <div className="flex justify-between items-center p-4 border-b border-border">
                            <h2 className="text-lg font-semibold">Shopping Cart</h2>
                            <button onClick={() => setShowCart(false)} className="text-muted-foreground hover:text-foreground">
                                <img aria-hidden="true" alt="close-icon" src="https://openui.fly.dev/openui/24x24.svg?text=✖" />
                            </button>
                        </div>
                        <div className="p-6 text-center flex flex-col justify-center h-full">
                            <img src={img} alt="person with empty cart illustration" className="mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Unfortunately, Your Cart is Empty</h3>
                            <p className="text-muted-foreground mb-4">Please Add Somethings in your Cart</p>
                            <button className="bg-blue-600 text-white hover:bg-blue-800 px-4 py-2 rounded-lg">Continue Shopping</button>
                        </div>
                    </div>
                </div>
            }
            {(cartItems?.length && setShowCart) && (
                <div className="fixed right-0 top-0 z-50 flex items-center justify-center bg-white w-1/3">
                    <div className="bg-card text-card-foreground w-full max-w-[28rem] mx-auto rounded-lg shadow-lg min-h-[350px] flex flex-col">
                        <div className="flex justify-between items-center p-4 border-b border-border">
                            <h2 className="text-lg font-semibold">Shopping Cart</h2>
                            <button className="text-muted-foreground hover:text-foreground">
                                <img onClick={() => setShowCart(false)} aria-hidden="true" alt="close-icon" src="https://openui.fly.dev/openui/24x24.svg?text=✖" />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-6">
                            <div className="space-y-4">
                                {cartItems?.map((item, index) => (
                                    <div key={index} >
                                        <div className="flex items-center justify-between border-b border-border pb-4">
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    src={item?.attributes.img?.data?.attributes?.url ? "http://localhost:1337" + item.attributes.img?.data?.attributes?.url : `https://placehold.co/50x50`}
                                                    alt="product image 3"
                                                    className="w-12 h-12 rounded-lg" />
                                                <div>
                                                    <h3 className="text-sm font-semibold">{item.attributes.tittle}</h3>
                                                    <p className="text-muted-foreground text-sm">${item.attributes.price}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <button onClick={() => handleCartQunatity('dec', item)} className="bg-gray-100 text-secondary-foreground hover:bg-secondary/80 px-3 py-1 rounded">-</button>
                                                <span className="text-sm">{item?.attributes?.quantity}</span>
                                                <button onClick={() => handleCartQunatity('inc', item)} className="bg-gray-100 text-secondary-foreground hover:bg-secondary/80 px-2 py-1 rounded">+</button>
                                                <button onClick={()=>handleRemoveFromCart(item)} className="bg-red-500 text-white hover:bg-red-600 px-2 py-1 rounded">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 border-t border-border">
                            <div className="flex flex-col items-center">
                                <button onClick={handlePayment} className="bg-blue-600 text-white hover:bg-blue-800 px-4 py-2 rounded-lg mb-4">Checkout</button>
                                <div className='font-semibold text-lg'>
                                    Total: <span>${cartSubTotal}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default Cart
