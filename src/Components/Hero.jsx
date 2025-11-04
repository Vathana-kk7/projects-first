import React, { useState, useEffect } from 'react';
import { IoPeopleCircleOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAccessMenu, setShowAccessMenu] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='p-5 mt-5 relative'>
      <div className='flex justify-between items-center text-2xl'>
        <IoPeopleCircleOutline />
        <h1 className='text-xl font-semibold'>ខ្មែរ-Tour</h1>
        <button onClick={toggleMenu}>
          <IoMdMenu />
        </button>
      </div>

      {/* Menu Overlay */}
      <div 
        className={`fixed top-0 right-0 h-full w-[80%] bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-lg ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className='p-5'>
          <div className='flex justify-between items-center mb-6 mt-6'>
            <h2 className='text-xl font-semibold'>ខ្មែរ-Tour</h2>
            <button onClick={toggleMenu}>
              <IoCloseOutline className='text-2xl' />
            </button>
          </div>

          <div className='flex flex-col gap-6'>
            <div>
              <button className='text-left text-lg py-2 mr-16 hover:text-gray-600'>ទំព័រដើម</button>
              <button className='text-left text-lg py-2 mr-16 hover:text-gray-600'>ជំនួយការ</button>
              <button className='text-left text-lg py-2 mr-16 hover:text-gray-600'>អំពីយើង</button>
              <button className='text-left text-lg py-2 mr-16 hover:text-gray-600'>ទេសចរណ៏</button>
            </div>
          </div>

          <div className='mt-6 relative'>
            <div 
              className='relative inline-block'
              onMouseEnter={() => setShowAccessMenu(true)}
              onMouseLeave={() => setShowAccessMenu(false)}
            >
              <button className='px-5 py-2.5 bg-gray-600 text-white rounded-md text-lg hover:bg-gray-700 transition-colors'>
                Access
              </button>
              
              {showAccessMenu && (
                <div className='absolute left-0  w-48 bg-white rounded-md shadow-lg overflow-hidden border border-gray-200'>
                  <button className='w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors border-b border-gray-200'>
                    Login
                  </button>
                  <button className='w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors'>
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0  bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}

export default Hero;