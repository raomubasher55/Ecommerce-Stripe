import React from 'react'
import useFetch from '../../hooks/useFetch'

const Order = () => {
    const { data } = useFetch('/api/orders');
    // console.log(data);
    return (
        <>
            <div className="min-h-screen bg-background text-foreground">
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-6">Order Summary</h1>
                <div>
                    <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Items in Your Order</h2>
                        <div className="space-y-4">
                            {data && data.map((item , index)=>(
                            <div key={index} className="flex items-center justify-between border-b border-border pb-4">
                                {console.log(item.attributes.products[0].attributes.img.data.attributes.url)}
                                <div className="flex items-center space-x-4">
                                    <img src={`http://localhost:1337${item.attributes.products[0].attributes.img.data.attributes.url}`} alt="product image 1" className="w-12 h-12 rounded-lg" />
                                    <div>
                                        <h3 className="text-sm font-semibold">{item.attributes.products[0].attributes.tittle}</h3>
                                        <p className="text-muted-foreground text-sm font-semibold">$ {item.attributes.products[0].attributes.price}</p>
                                    </div>
                                </div>
                                <div className="text-sm">Quantity: {item.attributes.products[0].attributes.quantity}</div>
                            </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        </>
    )
}

export default Order
