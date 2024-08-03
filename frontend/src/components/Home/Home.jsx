import React, { useEffect } from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import Products from '../Products/Products'
import NewArrivals from '../Products/NewArrivals'
import Discount from './Discount/Discount'
import OrderMethod from './OrderMethod/OrderMethod'
const Home = () => {
    return (
        <>
            <div className="bg-background text-foreground p-2 ">
                <Banner />
                <Category />
                <Products />
                <NewArrivals />
                <Discount/>
                <OrderMethod/>
            </div>

        </>
    )
}

export default Home
