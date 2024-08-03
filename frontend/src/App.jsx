import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import { Outlet } from "react-router-dom";
import Banner from './components/Home/Banner/Banner';
import NewsLetter from './components/Home/NewsLetter/NewsLetter';
import Footer from './components/Footer/Footer';
import SingleProduct from './components/SingleProducts/SingleProduct';
import { ContextProvider } from './context/Context';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContextProvider>
        <Header />
        {/* <SingleProduct/> */}
        <Outlet />
        <NewsLetter />
        <Footer />
      </ContextProvider>
    </>
  )
}

export default App
