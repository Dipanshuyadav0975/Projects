import React, { useEffect } from 'react';
import { FaStar, FaRegHeart } from 'react-icons/fa';
import { MdAddShoppingCart, MdCheckCircle, MdOutlineRemoveRedEye } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { products } from '../export.js';

import { useContext } from "react";
import { CartContext } from "../CartContext";


const Productsgrid = () => {

  const { cart, addToCart } = useContext(CartContext);


  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });

    AOS.refresh();
  }, [])

  return (
    <div id='products' className='w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4'>

      <h1 data-aos="zoom-in" data-aos-delay="100" className='text-themepurple text-xl font-semibold'>
        Browse Collections </h1>

      <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black font-semibold text-[42px] leading-[50px] text-center'>
        Trending Products </h1>

      <div data-aos="zoom-in" data-aos-delay="300" className='w-full grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center gap-6 mt-10'>
        {
          products.map((item, index) => {
            const isInCart = cart.some((cartItem, i) => i === index);
            return (
              <div id='product-box' key={index} className='flex flex-col justify-center items-center gap-2 bg-white p-4 rounded-lg cursor-pointer relative w-full max-w-[320px] mx-auto overflow-hidden'>
                <img
                  src={item.img}
                  alt=""
                  className='w-full max-w-[220px] h-auto object-contain'
                />

                <div id='icons' className='flex flex-wrap justify-center items-center gap-3 absolute top-3 left-1/2 -translate-x-1/2 w-full px-2'>

                  <div className='bg-themepurple hover:bg-themeyellow rounded-full p-2 md:p-3 text-white text-sm md:text-base'>
                    <MdOutlineRemoveRedEye />
                  </div>

                  <div className='bg-themepurple hover:bg-themeyellow rounded-full p-2 md:p-3 text-white text-sm md:text-base'>
                    <FaRegHeart />
                  </div>

                  <div className='bg-themepurple hover:bg-themeyellow rounded-full p-2 md:p-3 text-white text-sm md:text-base'>

                    {isInCart ? (
                      <MdCheckCircle className="text-green-500 text-xl" />
                    ) : (
                      <MdAddShoppingCart
                        onClick={() => addToCart(item)}
                        className="cursor-pointer text-xl hover:text-themepurple"
                      />
                    )}



                  </div>
                </div>

                <div>
                  <h1 className='text-lg text-gray-400 font-semibold'>{item.category}</h1>

                  <h1 className='text-xl text-black font-semibold'>{item.name}</h1>

                  <h1 className='text-lg text-themepurple font-semibold'>{item.price}</h1>

                  <div className='w-full mt-2'>
                    <hr />
                    <div className='flex justify-between items-center gap-6 mt-3'>
                      <div className='flex justify-start items-center gap-1'>
                        <FaStar className='text-themepurple' />
                        <FaStar className='text-themepurple' />
                        <FaStar className='text-themepurple' />
                        <FaStar className='text-themepurple' />
                        <FaStar className='text-themepurple' />

                      </div>
                      <button className='bg-green-500 text-white px-4 py-2 rounded-lg text-[13px0 font-semibold'>SALE 14%</button>

                    </div>

                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <button data-aos="zoom-in" data-aos-delay="400" className='bg-themepurple hover:bg-themeyellow text-white hover:text-black font-semibold px-8 py-3 rounded-lg mt-8'>VIEW MORE</button>
    </div>
  )
}

export default Productsgrid
