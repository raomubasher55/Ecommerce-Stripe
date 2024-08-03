import React, { useEffect , useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
    const [products, setProducts] = useState();
    const {data} = useFetch('/api/orders');
    const navigate  = useNavigate();

        if(data){
            data.forEach((item)=>{
                console.log(item.attibue)
        })
        }
 
    
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-card text-card-foreground w-full max-w-[28rem] mx-auto rounded-lg shadow-lg bg-white min-h-[200px]">
                    <div className="flex justify-between items-center p-4 border-b border-border">
                        <h2 className="text-lg font-semibold">Order Success</h2>
                        <button className="text-muted-foreground hover:text-foreground">
                            <img aria-hidden="true" alt="close-icon" src="https://openui.fly.dev/openui/24x24.svg?text=✖" />
                        </button>
                    </div>
                    <div className="p-6">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-semibold">Thank you for your order!</h3>
                            <p className="text-muted-foreground">Your order has been placed successfully.</p>
                        </div>
                        <div className="mt-6 text-center">
                            <button onClick={()=>navigate('/products')} className="bg-blue-600 text-white hover:bg-blue-800 px-4 py-2 rounded-lg">Continue Shopping</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderSuccess
