import React from 'react'
import img from '../../../assets/black_headphones.png'
import { MdStars } from "react-icons/md";


const Discount = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-44  p-12 bg-green-50 ">
                <img src={img} alt="Micropack MHP Headphone Black" className="w-1/2 md:w-[25%] rounded-lg h-1/2" />
                <div className="flex flex-col gap-4">
                    <span className="text-primary text-sm text-red-500 flex items-center gap-3 font-bold"><MdStars className='text-xl' />  Top Products of The Month</span>
                    <h1 className="text-3xl font-bold">Micropack MHP Headphone Black</h1>
                    <p className="text-muted-foreground text-zinc-500">
                        Discover optimal well-being through balanced exercises. Achieve a healthy body with expert guidance, personalized routines, and transformative fitness solutions.
                    </p>
                    <button className="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg w-max shopBtn bg-green-200 hover:bg-green-400 ">Shop Now</button>
                </div>
            </div>
        </>
    )
}

export default Discount
