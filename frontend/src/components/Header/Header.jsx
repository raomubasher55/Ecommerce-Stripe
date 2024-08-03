import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { UseContext } from '../../context/Context';
import Cart from '../Cart/Cart';
import Search from '../Search/Search';
// import { Badge } from 'antd';
const Header = () => {
  const [scroll, setScroll] = useState(false)

  const [isCategoriesDropdownVisible, setCategoriesDropdownVisible] = useState(false);
  const [isAccountDropdownVisible, setAccountDropdownVisible] = useState(false);
  const [slider, setSlider] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState(false)

  const { cartCount, cartItems } = UseContext();
  
  const toggleCategoriesDropdown = () => {
    setCategoriesDropdownVisible(!isCategoriesDropdownVisible);
  };

  const toggleAccountDropdown = () => {
    setAccountDropdownVisible(!isAccountDropdownVisible);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])

  const handleOnSlider = () => {
    console.log('clicked');
    setSlider(!slider);
    console.log(slider);
  }

  return (
    <>
      <div>
        <nav className={`flex flex-row  md:flex-row items-center justify-between py-4 px-12 border-b border-border nav_sec1 ${scroll ? "sticky_nav1" : "nav_sec1"} bg-white w-full z-10`}>
          <div className="text-3xl font-bold mb-4 md:mb-0 md:mr-4"><img src={logo} alt="" /></div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center md:hidden">
              <button onClick={handleOnSlider} id="menu-toggle" className="block text-primary hover:text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>

            </div>
            <Search/>
            <div className="hidden md:flex items-center font-semibold space-x-12">
              <Link to="/" className="hover:text-primary">Home</Link>
              <Link to="/products" className="block py-2 px-4 hover:bg-gray-200 text-md">Products</Link>
              <Link to="/about" className="hover:text-primary">About</Link>
              <Link to="/contact" className="hover:text-primary">Contact</Link>
              <div onClick={() => setShowCart(true)} className="relative hover:text-primary cursor-pointer">
                Cart
                {cartCount > 0 && (
                  <span className='bg-red-500 inline-block w-4 h-4 rounded-lg absolute top-0 right- text-white text-center text-xs'>
                    {cartItems.length}
                  </span>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div>
        {slider && <div className='bg-gray-100 w-1/2 min min-h-screen absolute right-0 slider' >
          <div className="flex flex-col justify-center items-center font-semibold gap-12 text-xl my-5">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/products" className=" hover:bg-gray-200 text-md">Products</Link>
            <Link to="/about" className="hover:text-primary">About</Link>
            <Link to="/order" className="hover:text-primary">Order</Link>
            <div onClick={() => setShowCart(true)} className="hover:text-primary">Cart <span className='bg-red-600 inline'>{cartItems.length}</span> </div>
          </div>
        </div>}
      </div>
      {showCart && <Cart setShowCart={setShowCart} />}
      {/* {search && <Search/>} */}
      {/* <Search/>  */}
    </>
  );
}

export default Header;
