import React from 'react'
import Carousel from 'react-multi-carousel';  // React Multi Carousel (npm package)
import 'react-multi-carousel/lib/styles.css'; // React Multi Carousel style

export default function HeadCarousel() {
                                              // responsiveness of carousel
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }};


    return (
         


       <div className = "w-full mt-[5rem]">

            <Carousel className='text-white '
                responsive={responsive}  // carousel control parameters
                showDots={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000} 
                arrows={false}
                pauseOnHover= {false}>

                <div className='w-full h-[500px] header-bg1 text-white flex justify-center items-center'>
                    <div className="flex flex-col items-center p-3 animate-fade-in-down">
                        <h1 className='font-bold text-4xl p-3'>AIRPORT TRANSFERS</h1>
                        <h3 className="font-semibold text-2xl p-3">TAXI TO/FROM PERTH AIRPORT - NO SURCHARGE.NO CALL OUT FEE</h3>
                        <button className="p-3"><a href="services/airport-transfers" className="bg-[#ff9800] rounded px-2 py-1">Read More</a></button>
                    </div>
                </div>
                <div className='w-full h-[500px] header-bg2 text-white flex justify-center items-center'>
                    <div className="flex flex-col items-center p-3 animate-fade-in-up">
                        <h1 className='font-bold text-4xl p-3'>BABY CAPSULE</h1>
                        <h3 className="font-semibold text-2xl p-3">TRAVELLING WITH BUB ? BOOK A TAXI WITH A BABY SEAT.</h3>
                        <button className="p-3"><a href="services/airport-transfers" className="bg-[#ff9800] rounded px-2 py-1">Read More</a></button>
                    </div>
                </div>
                <div className='w-full h-[500px] header-bg3 text-white flex justify-center items-center'>
                    <div className="flex flex-col items-start p-3 animate-fade-in-right">
                        <h1 className='font-bold text-4xl p-3  pt-0 border-l-4 border-[#ff9800]'>WEDDING TRANSPORT</h1>
                        <h3 className="font-semibold text-2xl p-3 pt-0 border-l-4 border-white mt-2">COMFORTABLE TRANSFERS FOR ALL YOUR WEDDING GUESTS</h3>
                        <button className="p-3"><a href="services/airport-transfers" className="bg-[#ff9800] rounded px-2 py-1">Read More</a></button>
                    </div>
                </div>
                <div className='w-full h-[500px] header-bg4 text-white flex justify-center items-center'>
                    <div className="flex flex-col items-end p-3 animate-fade-in-left">
                        <h1 className='font-bold text-4xl p-3 pt-0 border-r-4 border-[#ff9800]'>MAXI TAXI</h1>
                        <h3 className="font-semibold text-2xl p-3 pt-0 border-r-4 border-white mt-2">7/10/13 SEATERS FOR GROUP TRANSFERS , BIKES , WHEELCHAIRS</h3>
                        <button className="p-3"><a href="services/airport-transfers" className="bg-[#ff9800] rounded px-2 py-1">Read More</a></button>
                    </div>
                </div>
            </Carousel>

       </div>

        
    )
}
