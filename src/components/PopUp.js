import React from 'react'

export default function PopUp({info ,VisiblityHandler}) {
  return (
    <div className='  flex flex-col items-center justify-center border border-gray-200 shadow-2xl rounded-md   w-full  bg-white h-fit'>
        <div className='text-center flex flex-col items-center'> 
              <img className='w-[20%] animate-pulse relative top-[-60%] block' src={require(`./featureImages/check.png`)} alt="" />
              <h1 className='font-bold text-3xl font-sans'>Thank You!</h1>
              <p className='text-xl font-thin'>Your details has been successfully submitted. Thanks!</p>
        </div>{/* thanks part*/}
         
      <div className='p-3'>  {/* info part*/}
              <p className='p-1 text-lg'>&#x2022;<strong>Name: </strong>{info.name} </p>
              <p className='p-1 text-lg'>&#x2022;<strong>Phone no: </strong>{info.phone} </p>
              <p className='p-1 text-lg'>&#x2022;<strong>Email: </strong>{info.email} </p>
              <p className='p-1 text-lg'>&#x2022;<strong>Pick Up Date: </strong>{info.date} </p>
              <p className='p-1 text-lg'>&#x2022;<strong>Pick Up Time: </strong>{info.time} </p>
              <p className='p-1 text-lg'>&#x2022;<strong>Pick Up Place: </strong>{info.place} </p>
              <p className='p-1 text-lg'>&#x2022;<strong>Drop off Destination: </strong>{info.drop} </p>
              <p className='p-1 text-lg'>&#x2022;<strong>Number of passengers: </strong>{info.count} </p>
        </div>
        <div  onClick={()=>{VisiblityHandler() ; }} className='w-[60%] text-center  shadow-md  px-4 py-2 bg-sky-500 text-2xl font-bold text-white rounded hover:bg-sky-800 m-4'>OK</div>
    </div>
  )
}
