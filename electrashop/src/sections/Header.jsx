import React, { useEffect, useState } from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaMapMarkerAlt } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { Link } from 'react-scroll';
import { FaXmark, FaBars, FaPhoneVolume } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdAddShoppingCart } from "react-icons/md";

import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../CartContext";


const Header = () => {

  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };



  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });

    AOS.refresh();
  }, [])

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(!false);
  }

  const navItems = [
    {
      link: 'Home', path: 'hero'
    },
    {
      link: 'About', path: 'about'
    },
    {
      link: 'Products', path: 'products'
    },
    {
      link: 'Testimonials', path: 'testimonials'
    },
    {
      link: 'Contact', path: 'contact'
    },
  ]

  return (
    <>
      <div className='w-full px-15 py-2 bg-themeyellow lg:flex hidden justify-between items-center gap-6'>
        <h1 className='text-sm font-semibold flex justify-center items-center gap-2'><FaPhoneVolume className='size-[18px]' /> <span>+91 890 929 0192</span></h1>
        <h1 className='text-sm font-semibold flex justify-center items-center gap-2'><FaMapMarkerAlt className='size-[18px]' /> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio itaque nam</span></h1>
        <h1 className='text-sm font-semibold flex justify-center items-center gap-2'><MdEmail className='size-[18px]' /> <span>electrashop@company.com</span></h1>

      </div>

      <nav className='w-full bg-gray-100 flex justify-between items-center gap0-1 lg:px-16 px-6 py-5 sticky top-0 z-50'>
        <h1 className='text-themepurple font-bold lg:text-[30px] text-3xl underline italic'>Electra Shop</h1>
        <ul className='lg:flex justify-center items-center gap-10 hidden'>
          {navItems.map(({ link, path }) => (
            <Link key={path} className='text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-themepurple hover:text-white' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
          ))}
        </ul>

        <div id='header-icons' className='lg:flex justify-center items-center gap-6 text-black'>
          <FaSearch className='w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurple' />
          <IoPerson className='w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurple' />
          <FaHeart className='w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurple' />
          <div className='relative'>
            <div className="relative">
              <div
                onClick={() => navigate("/cart")}
                className="relative cursor-pointer"
              >
                <MdAddShoppingCart className="text-xl" />

                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                  {cart.length}
                </span>
              </div>
            </div>

            <div className='bg-themepurple hover:bg-themeyellow px-3 py-1 text-white hover:text-black rounded-full absolute -top-[24px] -right-[15px] text-[14px] font-bold'>
              {/* cart value */}
            </div>
          </div>
          {/* User Email */}
          {isLoggedIn && (
            <p className="text-sm text-gray-700">{user}</p>
          )}

          {/* Logout Button */}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded text-sm"
            >
              Logout
            </button>
          )}

        </div>

        {/* mobile menu starts here */}

        <div className='flex justify-center items-center lg:hidden mt-3' onClick={toggleMenu}>
          <div>
            {isMenuOpen ? <FaXmark className='text-themepurple text-3xl cursor-pointer' /> : <FaBars className='text-themepurple text-3xl cursor-pointer' />}
          </div>
        </div>

        <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-themepurple p-4 absolute top-[80px] left-0`} onClick={closeMenu}>
          <ul className='flex flex-col justify-center items-center gap-2 w-full'>
            {navItems.map(({ link, path }) => (
              <Link key={path} className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-themeyellow hover:text-black w-full text-center' to={path} spy={true} offset={-100} smooth={true}>
                {link}
              </Link>
            ))}

          </ul>
        </div>
      </nav>

    </>
  );
};

export default Header;
