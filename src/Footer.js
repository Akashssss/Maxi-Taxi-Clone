import React from 'react'
import Phone from '@mui/icons-material/LocalPhone'; //material ui icon
import Plane from '@mui/icons-material/ConnectingAirports';//material ui icon
import Email from '@mui/icons-material/Email';//material ui icon
import WhatsApp from '@mui/icons-material/WhatsApp';//material ui icon
import { useState } from 'react';
import Btn from './components/btn'; // black-yellow button
export default function Footer() {

    const [phone, setPhone] = useState("");  // hook for phone Number 

    // phone Number handler for vaidation of phone number of 10 digits , not start with 0 and set number value
    const phoneNumberHandler = (p) => {

        const regex = /^[1-9]\d{0,9}$/;
        console.log(p)
        if (regex.test(p) == true) {
            setPhone(p)
        }
    }

    return (
        <div className='w-full'> <div className='w-full grid md:grid-cols-2 grid-cols-1 text-black text-lg items-center justify-center px-10 md:p-24 text-left '>
            
            <div>                 {/*left footer - links*/}
                <h1 className='font-bold text-2xl mt-6'>Call a Cab Now</h1>
                <div className='mt-2'><Phone className='text-[#ff9800] text-xs' />&nbsp; +61 406 553 313</div>
                <div className='m-2'> <Plane className='text-[#ff9800] text-xs' />&nbsp; From overseas: +61 406 553 313</div>
                <div className='m-2'><Email className='text-[#ff9800] text-xs' />&nbsp; maxitaxiserviceperth1@gmail.com</div>
                <div className='m-2'><WhatsApp className='text-green-500 text-xs' />&nbsp; +61 406553313</div>
                <div className='m-2'>*&nbsp; FAQ</div>
                <div className='m-2'>*&nbsp; Locations</div> 
            </div>


            <div>              {/*Right footer - Contact form*/}
                <h1 className='font-bold text-2xl mt-6'>Leave A Message</h1>
                <form id="fo" action="" className='text-black' onSubmit={(e) => { e.preventDefault(); setPhone(""); document.getElementById("fo").reset() }}>
                    <div className='grid md:grid-cols-2 gap-4 grid-cols-1'>
                        <input type="text" placeholder='Name' required className='border-2 border-black p-2 mt-2'></input>
                        <input type="email" placeholder='Email' required className='border-2 border-black p-2 mt-2'></input>
                    </div>
                    <div className='grid grid-cols-1'>
                        <input type="text"
                            placeholder='Phone Number'
                            className='border-2 border-black p-2 mt-2'
                            onChange={(e) => { phoneNumberHandler(e.target.value) }}
                            value={phone} required />
                    </div>
                    <div className='grid md:grid-cols-2 gap-4 grid-cols-1'>
                        <input required
                            type="text"
                            onFocus={(e) => { e.target.type = "date" }}
                            placeholder="Pick Up Date"
                            className='border-2 border-black p-2 mt-2' />
                        <input required

                            type="text" placeholder='Pick Up Time '
                            onFocus={(e) => { e.target.type = "time" }}
                            className='border-2 border-black p-2 mt-2' />
                    </div>

                    <div className='cursor-pointer grid grid-cols-1'><button type='submit' className='w-full mt-8 font-bold '><Btn buttonName='SUBMIT' /></button></div>
                </form>

            </div>
        </div>
            <div className='h-[50px] mt-10 w-full bg-black   text-center text-white pt-2'>
                Copyright-Maxi Taxi Perth | Website Design & SEO ByDigital Checkpoint.- clone by AKASH
            </div>

        </div>
    )
}
