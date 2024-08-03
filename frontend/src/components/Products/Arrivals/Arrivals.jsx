import React from 'react'

const Arrivals = () => {
    return (
        <>
            <div className="bg-card p-4 rounded-lg mb-4 flex items-center">
                <img src="https://placehold.co/100x100?text=Headphone" alt="Logitech G320 Gaming Headphone" className="w-24 h-24 rounded-lg mr-4" />
                <div>
                    <h4 className="text-lg font-semibold">Logitech G320 Gaming Headphone</h4>
                    <div className="flex items-center text-yellow-500 mb-2">
                        <span>★★★★★</span>
                    </div>
                    <p className="text-xl font-bold">$399.00</p>
                </div>
            </div>
        </>
    )
}

export default Arrivals
