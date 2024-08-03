import React from 'react'
import useFetch from '../../hooks/useFetch';
import Product from '../Products/Product/Product';

const SimilarProduct = ({ productId, categoryId }) => {

    const { data } = useFetch(`/api/products?populate=img&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`);
    return (
        <>
           <div className="mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {data?.map((p, index) => (
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


export default SimilarProduct
