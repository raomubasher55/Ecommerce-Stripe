import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Product = ({title, price, rating, image ,id}) => {
    const pathname = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
      window.scrollTo(0,0)
    }, [pathname])
    
    return (
        <>
                <div onClick={()=>{navigate(`/single-product/${id}`)}} className="flex flex-col items-center hover:shadow-xl transition-shadow duration-300 bg-zinc-50 rounded-lg py-6 ">
                    <div className="w-48 h-48 mb-12">
                        <img
                            src={ image? `http://localhost:1337${image} ` : `https://placehold.co/200x200` }
                            alt="Product Image"
                            className="w-full h-full object-contain rounded-lg mix-blend-multiply "
                        />
                    </div>
                    <hr className='h-4 w-full' />
                    <div className='flex flex-col justify-center items-start gap-4'>
                        <span className='font-semibold text-xl'>{title}</span>
                        <span className="text-yellow-500">⭐⭐⭐⭐{rating}</span>
                        <span className="font-bold text-xl">$ {price}</span>
                    </div>
                </div> 
        </>
    )
}

export default Product
