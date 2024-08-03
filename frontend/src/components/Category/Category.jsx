import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { NavLink, useParams } from 'react-router-dom';
import Product from '../Products/Product/Product';

const Category = () => {
  const [path, setPath] = useState('');
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);
  // console.log(data[0].attributes?.categories?.data[0]?.attributes?.title);
  return (
    <div className="mt-6 px-4 sm:px-6 lg:px-8">
      <div className='mb-12 flex items-center gap-2 text-2xl font-semibold ' >
        <NavLink to={'/'} className='text-gray-500'>Home   /</NavLink>
        <h4 className='' >{data ? data[0].attributes?.categories?.data[0]?.attributes?.title : ''}</h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((p, index) => (
          <div key={index} >
            <Product
              title={p?.attributes?.tittle}
              rating={p?.attributes?.rating}
              price={p?.attributes?.price}
              image={p?.attributes?.img?.data?.attributes?.url}
              id={p.id} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
