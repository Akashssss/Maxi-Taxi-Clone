import React from 'react'
import Avatar from "react-avatar" //React avatar package (npm)
export default function Reviews({reviewer ,review , image}) {

  return (
    
    <div className=' flex md:flex-row h-full flex-col items-center'>
    <div className='p-5 text-center md:h-full '> <Avatar name={reviewer} round src ={image}/><p>{reviewer}</p> </div>
          <div className=' md:border-r-2 border-r-0 border-b-2 md:border-b-0 md:w-0 w-[80%] md:h-[80%] rounded-md mx-4 border-[#ff9800]'></div>
          <div className=' p-5 px-10 md:text-left text-center self-start'>{review}</div>
    </div>
  )
}
