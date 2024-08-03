import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Search = () => {
    const [query, setQuery] = useState('');
    const [product, setProduct] = useState()

    const navigate = useNavigate();
    const handleOnChange = (e) => {
        setQuery(e.target.value)
    }
    let data = useFetch(`/api/products?populate=*&filters[tittle][$contains]=${query}`);

    useEffect(() => {
        setProduct(data.data);
    }, [query])


    const handleOnClick = (id) => {
        navigate(`single-product/${id}`);
        setProduct(null);
    }
    return (
        <>
            <div className="bg-card text-card-foreground p-4 rounded-lg max-w-lg mx-auto  ">
                <div className="relative">
                    <input
                        type="search"
                        value={query}
                        onChange={handleOnChange}
                        placeholder="search"
                        className="px-4 py-1 border rounded-full bg-input text-foreground"
                    />

                </div>

                {query && product && <div className="mt-2 absolute z-50 bg-zinc-50 shadow-lg w-[50%] left-[30%] min-h-[300px] max-h-[400px] overflow-y-scroll rounded-lg">
                    {product.length >= 1 ? product.map((item, index) => (
                        <div key={index}>
                            <div onClick={() => handleOnClick(item.id)} className="flex items-center p-2 hover:bg-muted cursor-pointer bg-zinc-200 m-3 rounded-lg">
                                <img aria-hidden="true" alt="product-icon" src={`http://localhost:1337${item?.attributes?.img?.data?.attributes?.url}`} className="mr-2 w-12 h-12" />
                                <div className='flex justify-between gap-12'>
                                    <div className="font-bold">{item.attributes.tittle}</div>
                                    <div>
                                        ${item.attributes.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
              : 
                    <div className='text-center p-6 font-semibold text-2xl'>no Item</div>
              }

                </div>}
            </div>

        </>

    )
}

export default Search
