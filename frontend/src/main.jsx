import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
import AllProducts from './components/Products/AllProducts/AllProducts.jsx';
import SingleProduct from './components/SingleProducts/SingleProduct.jsx';
import Category from './components/Category/Category.jsx';
import OrderSuccess from './components/Order/OrderSuccess.jsx';
import Order from './components/Order/Order.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
        <Route index  element={<Home/>} />
        <Route path='about'  element={<About/>} />
        <Route path='contact'  element={<Contact/>} />
        <Route path='products'  element={<AllProducts/>} />
        <Route path='categories/:id'  element={<Category/>} />
        <Route path='single-product/:id'  element={<SingleProduct/>} />
        <Route path='categories/:id/single-product/:id'  element={<SingleProduct/>} />
        <Route path='products/single-product/:id'  element={<SingleProduct/>} />
        <Route path='success'  element={<OrderSuccess/>} />
        <Route path='order'  element={<Order/>} />
    </Route>  
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
