import React from 'react'
import PopUp from './components/PopUp';
import { useState } from 'react';

export default function Form() {

    const [visible, setVisible] = useState(false);
    const [data, setData] = useState(
        {
            name: "",
            phone: "",
            email: "",
            date: "",
            time: "",
            place: "",
            drop: "",
            count: "",
            FNumber: "",
            note: "",
            oldData: {}
        }
    )
// Name handler for handle name validation and set value
    const nameHandler = (Newname) => {

        const regex = /^[a-zA-Z ]*$/
            ;

        if (regex.test(Newname)) {
            setData((prevState) => ({ ...prevState, name: Newname }));

        }
    }
// phone handler for handle phone Number validation and set value
    const phoneNumberHandler = (Newphone) => {

        const regex = /^[1-9]\d{0,9}$/;
        if (regex.test(Newphone) == true) {
            setData((prevState) => ({ ...prevState, phone: Newphone }));
        }
    }
// email handler for handle email validation and set value
    const emailHandler = (Newemail) => {
        setData((prevState) => ({ ...prevState, email: Newemail }));
    }
// date handler for  set date value
    const dateHandler = (Newdate) => {
        setData((prevState) => ({ ...prevState, date: Newdate }));
    }

// time handler for  time date value
    const timeHandler = (Newtime) => {
        setData((prevState) => ({ ...prevState, time: Newtime }));
    }
// place handler for  set place value
    const placeHandler = (Newplace) => {
        setData((prevState) => ({ ...prevState, place: Newplace }));
    }
// drop point handler for  set drop point value
    const dropHandler = (Newdrop) => {
        setData((prevState) => ({ ...prevState, drop: Newdrop }));
    }
// passengers count handler for  set passengers count value
    const countHandler = (Newcount) => {
        setData((prevState) => ({ ...prevState, count: Newcount }));
    }
// Flight Number handler for  set Flight Number value
    const FNumberHandler = (NewFNumber) => {
        setData((prevState) => ({ ...prevState, FNumber: NewFNumber }));
    }
// Note handler for  set Note value
    const noteHandler = (Newnote) => {
        setData((prevState) => ({ ...prevState, note: Newnote }));
    }



// submit Handler for form reset and dispaly popup
    const onSubmitHandler = () => {
        setData((prevState) => ({
            name: "",    
            phone: "",
            email: "",
            date: "",
            time: "",
            place: "",
            drop: "",
            count: "",
            FNumber: "",
            note: "",
            oldData: prevState
        })) 
        // form reset
        setVisible(true); // popup visiblity on
    }


    return (
        <div className=' w-full relative'>

            <form id="forms" onSubmit={(e) => { e.preventDefault(); onSubmitHandler() }} className=' h-fit p-7  text-white bg-[#ff9800]'>

                <div className=' grid lg:grid-cols-4 gap-4 p-3  md:grid-cols-2 '>


                    <div className='name w-full'  >
                        <label className='block font-bold'>Name</label>
                        <input required onChange={(e) => { nameHandler(e.target.value) }}
                            value={data.name} name="name"
                            type="text" placeholder='Name'
                            className=' w-full text-xs text-black p-3 outline-none hover:shadow-sm hover:shadow-black rounded-sm' />
                    </div>
                    <div className='phoneNo w-full' >
                        <label className='block font-bold'>Phone Number</label>
                        <input type="text"
                            placeholder='Phone Number' name="phone"
                            className='text-xs w-full text-black p-3 outline-none hover:shadow-sm hover:shadow-black rounded-sm'
                            onChange={(e) => { phoneNumberHandler(e.target.value) }}
                            value={data.phone} />
                    </div>
                    <div className='E-mail w-full '  >
                        <label className='block font-bold'>E-mail</label>
                        <input required onChange={(e) => { emailHandler(e.target.value) }}
                            value={data.email} name="email"
                            type="email" placeholder='E-mail '
                            className=' w-full text-xs text-black p-3 outline-none hover:shadow-sm hover:shadow-black rounded-sm' />
                    </div>
                    <div className='date w-full '  >
                        <label className='block font-bold'>Pick Up Date</label>
                        <input required onChange={(e) => { dateHandler(e.target.value) }}
                            value={data.date}
                            type="text" name="date"
                            onFocus={(e) => { e.target.type = "date" }}
                            placeholder="Pick Up Date"
                            className=' w-full text-xs text-black p-3 outline-none hover:shadow-sm hover:shadow-black rounded-sm' />
                    </div>
                </div>

                <div className='grid lg:grid-cols-5 gap-4 p-3  md:grid-cols-2'>

                    <div className='time  '  >
                        <label className='block font-bold'>Pick Up Time</label>
                        <input required onChange={(e) => { timeHandler(e.target.value) }}
                            value={data.time} name="time"
                            type="text" placeholder='Pick Up Time '
                            onFocus={(e) => { e.target.type = "time" }}
                            className=' w-full text-xs text-black p-3 outline-none hover:shadow-sm hover:shadow-black rounded-sm' />
                    </div>

                    <div className='place w-full'  >
                        <label className='block font-bold'>Pick Up Place</label>
                        <input required onChange={(e) => { placeHandler(e.target.value) }}
                            value={data.place} name="place"
                            type="text" placeholder='Pick Up Place'
                            className=' w-full text-xs text-black p-3 outline-none hover:shadow-sm hover:shadow-black rounded-sm' />
                    </div>

                    <div className='Drop w-full'  >
                        <label className='block font-bold'>Drop off Destination</label>
                        <input required onChange={(e) => { dropHandler(e.target.value) }}
                            value={data.drop} name="drop"
                            type="text" placeholder='Drop off Destination'
                            className=' w-full text-xs text-black p-3 outline-none hover:shadow-sm hover:shadow-black rounded-sm' />
                    </div>


                    <div className='count w-full'  >
                        <label className='block font-bold'>Number of passengers</label>
                        <input required onChange={(e) => { countHandler(e.target.value) }}
                            value={data.count} name="count"
                            type="number" placeholder='Number of passengers'
                            className=' w-full text-xs text-black p-3 outline-none hover:shadow-sm hover:shadow-black rounded-sm' />
                    </div>

                    <div className='FNumber w-full'  >
                        <label className='block font-bold'>Flight Number</label>
                        <input onChange={(e) => { FNumberHandler(e.target.value) }}
                            value={data.FNumber} name="fnumber"
                            type="text" placeholder='Flight Number (Optional)'
                            className=' w-full text-xs text-black p-3 outline-none hover:shadow-sm hover:shadow-black rounded-sm' />
                    </div>
                </div>

                <div className='grid lg:grid-cols-3 gap-4 p-3  md:grid-cols-2 m-3'>
                    <div className='note w-full md:col-span-2 col-span-1'  >
                        <label className='block font-bold'>Any Other Requirement</label>
                        <textarea onChange={(e) => { noteHandler() }}
                            value={data.note} name="message"
                            type="message"
                            className=' w-full h-full text-xs text-black p-3 outline-none hover:shadow-sm hover:shadow-black rounded-sm' />

                    </div>
                    <div className='m-3 ml-0 flex flex-col justify-between w-full h-full mt-6 '>
                        <button type="submit" className="w-full btnBlack  min-h-[50px] min-w-[100px] font-bold text-2xl  text-center pt-3">BOOK NOW</button>
                        <div className="w-full btnBlack  min-h-[50px] min-w-[100px] font-bold text-2xl  text-center pt-3">CANCEL</div>
                    </div>
                </div>
            </form>
            {visible && <div className={` bottom-[5%] md:left-[15%] left-[5%] md:w-[70%] w-[90%] popup `}> <PopUp info={data.oldData} VisiblityHandler={() => { setVisible(false) }} /></div>}
        </div>
    )

}
