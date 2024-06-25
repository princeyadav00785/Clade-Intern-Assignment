import React, { useState } from 'react';
import Jobslogo from '../assets/Icon.png';
import MessageLogo from '../assets/message-square-01.svg';
import PaymntLogo from '../assets/coins-hand.svg';
import BellLogo from '../assets/bell-02.svg';
import CompanyLogo from '../assets/Logo.png';
import DownLogo from '../assets/chevron-down.png';
import Menu from '../assets/Menu.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <div className='flex justify-between p-2 md:p-6 h-26 text-xs md:text-sm'>
        <div className='bg-[#E7E7E7] p-4 text-[#DC4A2D]'>Logo</div>
        <div className='p-1 flex gap-5 w-[85%] md:w-1/2 max-w-sm md:max-w-xl justify-between rounded-full border-2 hidden md:flex'>
          <div className='bg-[#DC4A2D] md:p-3 rounded-full flex md:gap-4'>
            <div className='flex gap-3'><img src={Jobslogo} alt="Jobs" />Jobs</div>
          </div>
          <div className='md:p-3 rounded-full flex md:gap-4'>
            <div className='flex gap-3'><img src={MessageLogo} alt="Messages" />Messages</div>
          </div>
          <div className='md:p-3 rounded-full flex md:gap-4'>
            <div className='flex gap-3'><img src={PaymntLogo} alt="Payments" />Payments</div>
          </div>
        </div>
        <div className='hidden md:block'>
          <div className='flex gap-3 '><img src={BellLogo} alt="Bell" /><img src={CompanyLogo} alt="Logo" /> <img src={DownLogo} alt="Icon" /></div>
        </div>
        <div className='md:hidden' onClick={toggleMenu}> 
          <div className='flex gap-3 mr-10 mt-3 text-lg'><img className='h-6 w-6' src={Menu} alt="Menu" />Menu</div>
        </div>
      </div>

      {menuOpen && (
        <div className='fixed inset-0 z-50 flex'>
          <div className='fixed inset-0 bg-black opacity-50' onClick={closeMenu}></div>
          <div className='bg-white w-64 p-6 overflow-y-auto'>
            <button className='mb-4 text-right' onClick={closeMenu}>Close</button>
            <div className='flex flex-col gap-4'>
              <div className='bg-[#DC4A2D] p-3 rounded-full flex gap-4'>
                <div className='flex gap-3'><img src={Jobslogo} alt="Jobs" />Jobs</div>
              </div>
              <div className='p-3 rounded-full flex gap-4'>
                <div className='flex gap-3'><img src={MessageLogo} alt="Messages" />Messages</div>
              </div>
              <div className='p-3 rounded-full flex gap-4'>
                <div className='flex gap-3'><img src={PaymntLogo} alt="Payments" />Payments</div>
              </div>
              <div className='flex gap-3'>
                <img src={BellLogo} alt="Bell" />
                <img src={CompanyLogo} alt="Logo" />
                <img src={DownLogo} alt="Icon" />
              </div>
            </div>
          </div>
        </div>
      )}
      <hr/>
    </div>
  );
};

export default Navbar;
