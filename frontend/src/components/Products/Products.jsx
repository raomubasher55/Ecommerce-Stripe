import React from 'react'
import Product from './Product/Product'
import { UseContext } from '../../context/Context';

const Products = () => {
    const { products } = UseContext();
    return (
        <>
            <div className="mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products?.map((p, index) => (
                        <div key={index} >
                            <Product
                                id={p?.id}
                                title={p?.attributes?.tittle}
                                rating={p?.attributes?.rating}
                                price={p?.attributes?.price}
                                image={p?.attributes?.img?.data?.attributes?.url}
                            />
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Products