import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

import useFetch from '../../hooks/useFetch';
import { UseContext } from '../../context/Context';
import SimilarProduct from './SimilarProduct';
const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { cartCount, setCartCount, setCartItems, cartItems, handleAddToCart } = UseContext();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  // console.log(data);
  // if(data){

  //   console.log('Ctg' , data[0].attributes.categories.data[0].id);
  //   console.log('prd' , data[0].attributes.id);
  //   console.log('prd' , id);
  // }
  const increment = () => {
    setQuantity((preState => preState + 1))
  }
  const decrement = () => {
    setQuantity((preState => {
      if (preState === 1) return 1;
      return preState - 1;
    }))
  }

  return (
    <>
      {data?.map((p, index) => (
        <div key={index} className="flex flex-col md:flex-row bg-card p-6 gap-32 rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img
              className="w-full md:w-64 rounded-lg object-cover"
              src={p?.attributes?.img?.data?.attributes?.name ? "http://localhost:1337" + p?.attributes?.img?.data?.attributes?.url : `https://placehold.co/200x200`}
              alt="Asus M220 Gaming Headphones" />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">{p.attributes.tittle}</h2>
              <p className="text-blue-600 text-2xl font-bold mt-2">${p.attributes.price}</p>
              <p className="text-muted-foreground mt-4 text-gray-500">{p.attributes.description}</p>
            </div>
            <div className="mt-4 flex items-center">
              <div className="flex items-center border border-input rounded-lg overflow-hidden">
                <button onClick={decrement} className="px-4 py-2 text-foreground bg-card hover:bg-muted" aria-label="Decrease quantity">-</button>
                <span className="px-4 py-2 text-foreground bg-input">{quantity}</span>
                <button onClick={increment} className="px-4 py-2 text-foreground bg-card hover:bg-muted" aria-label="Increase quantity">+</button>
              </div>
              <button onClick={() => {
                handleAddToCart(data[0], quantity)
              }}
                className="ml-4 bg-blue-600 text-white hover:bg-blue-800 px-6 py-2 rounded-lg flex items-center">
                <img aria-hidden="true" alt="shopping-cart" src="https://openui.fly.dev/openui/24x24.svg?text=🛒" className="mr-2" />
                ADD TO CART
              </button>
            </div>
            <hr className='my-6' />
            <div className="flex flex-col font-bold">
              <div>Category : {p.attributes.categories.data[0].attributes.title} </div>
              <div>Brand : {p.attributes.Brand}</div>
              <div className='flex items-center gap-3' >
                <span>Share :</span>
                <span  ><FaFacebookF className='text-blue-600' /></span>
                <span  ><FaInstagram className='text-blue-600' /></span>
                <span  ><FaTwitter className='text-blue-600' /></span>
                <span  ><FaPinterest className='text-blue-600' /></span>
              </div>
            </div>
          </div>
        </div>
      ))
      }
      <SimilarProduct categoryId={data? data[0].attributes.categories.data[0].id : ""}  productId={id} />
    </>
  )
}

export default SingleProduct
