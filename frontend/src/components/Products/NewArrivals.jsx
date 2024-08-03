import React from 'react'
import iPhone from '../../assets/iphones.png'
import Arrivals from './Arrivals/Arrivals'

const NewArrivals = () => {
    return (
        <>
            <div className="container mx-auto p-4 my-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                    <h2 className="text-3xl font-bold">New Arrivals</h2>
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/80 flex items-center">View All Products <span className="ml-2">→</span></button>
                </div>
                <div className='flex flex-col'>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="bg-card p-4 rounded-lg flex-1 bg-zinc-50">
                            <div className='' >
                                <h3 className="text-xl font-semibold mb-2">Samsung Galaxy Note20 Ultra 5G</h3>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center mb-4">Shop Now <span className="ml-2">→</span></button>
                            </div>
                            <div>
                            <img src={iPhone} alt="Samsung Galaxy Note20 Ultra 5G" className="w-full h-full object-cover rounded-lg" />
                            </div>
                        </div>
                        <div className="flex-1">
                            {/* <div className="bg-card p-4 rounded-lg mb-4 flex items-center">
                                <img src="https://placehold.co/100x100?text=Headphone" alt="Logitech G320 Gaming Headphone" className="w-24 h-24 rounded-lg mr-4" />
                                <div>
                                    <h4 className="text-lg font-semibold">Logitech G320 Gaming Headphone</h4>
                                    <div className="flex items-center text-yellow-500 mb-2">
                                        <span>★★★★★</span>
                                    </div>
                                    <p className="text-xl font-bold">$399.00</p>
                                </div>
                            </div>
                            <div className="bg-card p-4 rounded-lg mb-4 flex items-center">
                                <img src="https://placehold.co/100x100?text=Watch" alt="Olevs Fashion Waterproof Watch For Men" className="w-24 h-24 rounded-lg mr-4" />
                                <div>
                                    <h4 className="text-lg font-semibold">Olevs Fashion Waterproof Watch For Men</h4>
                                    <div className="flex items-center text-yellow-500 mb-2">
                                        <span>★★★★★</span>
                                    </div>
                                    <p className="text-xl font-bold">$379.00</p>
                                </div>
                            </div>
                            <div className="bg-card p-4 rounded-lg flex items-center">
                                <img src="https://placehold.co/100x100?text=Headset" alt="Asus TUF Gaming H70 Lite Gaming Headset" className="w-24 h-24 rounded-lg mr-4" />
                                <div>
                                    <h4 className="text-lg font-semibold">Asus TUF Gaming H70 Lite Gaming Headset</h4>
                                    <div className="flex items-center text-yellow-500 mb-2">
                                        <span>★★★★★</span>
                                    </div>
                                    <p className="text-xl font-bold">$349.00</p>
                                </div>
                            </div> */}
                            <Arrivals/>
                            <Arrivals/>
                            <Arrivals/>
                            <Arrivals/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NewArrivals