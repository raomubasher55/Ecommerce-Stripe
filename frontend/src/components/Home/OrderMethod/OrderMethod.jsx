import React from 'react'
import img1 from '../../../assets/ship.png'
import img2 from '../../../assets/secure.png'
import img3 from '../../../assets/online-support.png'

const OrderMethod = () => {
    return (
        <>
            <div className="flex justify-center p-4 my-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg ">
                    <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md orderCard">
                        <div className="flex flex-col items-center">
                            <img src={img1} alt="Free Shipping Icon" className="mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
                            <p className="text-muted-foreground text-center">Our free shipping policy applies to all orders, regardless of order value or destination.</p>
                        </div>
                    </div>
                    <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md orderCard">
                        <div className="flex flex-col items-center">
                            <img src={img2} alt="Secure Payments Icon" className="mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Secure Payments</h3>
                            <p className="text-muted-foreground text-center">Your payments are always safe, secure, and protected at all times.</p>
                        </div>
                    </div>
                    <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md orderCard">
                        <div className="flex flex-col items-center">
                            <img src={img3} alt="Support Online Icon" className="mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Support Online 24/7</h3>
                            <p className="text-muted-foreground text-center">We are available 24/7 to assist you with any questions, or issues you may have.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OrderMethod
