import React from 'react'
import Home from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
export default function Header() {

    const[open, setOpen] = useState(false) ; {/* hook use to change burger icon to close icon*/}

  return (
    <div className='flex large:flex-row flex-col  w-full h-20 bg-white'>
        <div className='flex-[0.3] flex justify-center w-full h-full'>
              {<div onClick={() => { setOpen(!open) }} className='large:hidden  absolute top-4 right-4 '>{open ? <CloseIcon className='text-red-800 scale-[1.5] mx-3 mt-2' />:<MenuIcon  className='text-red-800 scale-[1.5] mx-3 mt-2' />}</div>}
              <img className='w-[200px] h-[45px] m-3 ' src={require('./components/featureImages/maxitaxi-logo.png')} alt="" />
        </div>
        {<div className={`  ${open?"visible":"hidden"} large:flex large:static absolute large:h-full h-[600px] z-10 flex large:flex-row flex-col flex-[0.7] w-[50%] large:bg-white bg-black large:w-full  justify-evenly font-semibold large:items-center  text-white large:text-black `}>
              <div  className=' cursor-pointer h-full flex flex-col justify-center  border-b-2  border-[#ff9800]  mr-4 large:pl-0 pl-6'><Home/></div>
                  <div className='navStyle large:pl-0 pl-6'>ABOUT</div>
                  <div className='navStyle large:pl-0 pl-6'>OUR SERVICES
                      {/* <div className='hidden'><ul>
                          <li>AIRPORT TRANSFERS</li>
                          <li>BABY CAPSULES</li>
                          <li>MAXI TEXIS</li>
                          <li>WEDDING TRANSPORT</li>
                          <li>WHEELCHAIR ASSESSIBLE TAXI IN PERTH</li>
                          <li>Airport Transfer Fremantle</li>
                          <li>Airport Transfer Mandurah</li>
                          <li>Airport Transfer Rockingham</li>   
                      </ul></div> */}                               {/* use when implement routing */}
                  </div>
                  <div className='navStyle large:pl-0 pl-6'>WHY CHOOSE US</div>
                  <div className='navStyle large:pl-0 pl-6'>FARE CALCULATOR</div>
                  <div className='navStyle large:pl-0 pl-6'>CONTACT US</div>
                  <div className='navStyle large:pl-0 pl-6'>BLOG</div>
                  <div className='navStyle large:pl-0 pl-6'>PAY NOW</div>
       </div>}
    </div>
  )
}
