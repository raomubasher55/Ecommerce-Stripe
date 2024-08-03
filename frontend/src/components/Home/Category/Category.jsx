import React from 'react'
import laptop from '../../../assets/categorys/laptop.png';
import headphone from '../../../assets/categorys/headphones.png';
import camera from '../../../assets/categorys/camera.png';
import phone from '../../../assets/categorys/phone.png';
import videogame from '../../../assets/categorys/videogame.png';
import watch from '../../../assets/categorys/watch.png';
import {UseContext } from '../../../context/Context';
import { useNavigate } from 'react-router-dom';


const Category = () => {
    const {category} = UseContext();
    const navigate = useNavigate();
    // console.log(c?.attributes?.image?.attributes?.url);
    return (
        <>
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Top Categories</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 px-16">
                    {category.map((c , index)=>(
                    <div key={index} onClick={()=>navigate(`/categories/${c.id}`)} className="flex flex-col items-center border border-gray-2 shadow-md">
                        <img src={`http://localhost:1337${c?.attributes?.image?.data?.attributes?.url}`} alt="Laptops" className="mb-2" />
                        <span>{c.attributes.title}</span>
                    </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
}

export default Category
