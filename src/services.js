import React from 'react'
import Btn from './components/btn';  // yellow-black button component
import { useState, useEffect } from 'react';


// fuction to calculate the current width and height of window
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };}
 function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions()); }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);

  return windowDimensions;
}

export default function Services() {

  // array of object contain service name , service image and about the service
  const services =
    [
      {
        ServiceName: "AIRPORT TRANSFERS",
        Imgsrc: "https://www.maxitaxiperth.com.au/assets/uploads/service/airport_transfer.jpg",
        content: "Airport transfers can be daunting, so much so that people often look for support from their families when arriving or departing from any airport terminal. But reliable taxi services are changing this scenario with their easy pick-up and drop services in the Perth suburban area. Whether someone is arriving early morning or later in the night, these fast taxi services can be trusted with hassle-free transportation to and from Perth city."
      },
      {
        ServiceName: "Baby Capsule Hire Perth",
        Imgsrc: "https://www.maxitaxiperth.com.au/assets/uploads/service/baby_capsule.jpg",
        content: "Travelling with a baby or toddler? Book a taxi with Maxi Taxi Perth. If you don’t have your baby capsule, don’t worry: we will send a taxi with a baby seat that meets all government regulations. Your child’s safety and comfort are our priority. Our experienced drivers will strap it in correctly and securely if you have your child seat or booster seat. All our taxis have approved anchor points to restrain baby seats safely. Our baby capsules and child seats are available to use free of charge. "
      },
      {
        ServiceName: "MAXI TAXIS",
        Imgsrc: "https://www.maxitaxiperth.com.au/assets/uploads/service/maxi_taxi.jpg",
        content: "If you need one or several maxi taxis in the Greater Perth area, call Maxi Taxi Perth. While we have a diverse fleet of taxis, maxi taxis are our specialty. We have a range of 10-seater and 13-seater taxis as well as 7-seater Taragos. Whether you need corporate transfers, taxi services for conferences, school excursions, concerts, parties such as hens and bucks nights, or transport for wheelchairs, bicycles or surfboards, we can easily organise any maxi taxi services to suit your needs.",
      }, {
        ServiceName: "WEDDING TRANSPORT",
        Imgsrc: "https://www.maxitaxiperth.com.au/assets/uploads/service/090114900_1598807226.jpg",
        content: "Planning a wedding? Organise transport for your guests between venues in advance and enjoy the day knowing all transfers are taken care of. Maxi Taxi Perth provides outstanding wedding transportation services 24/7 at an affordable price. Forget about expensive limos. Book clean wedding cars at normal taxi rates. Our experienced chauffeurs can transport up to 200 wedding guests. Get in touch and we’ll give you a set price for all the wedding transport you need. "
      }, {
        ServiceName: "Wheelchair Accessible Taxi Perth"
        , Imgsrc: "https://www.maxitaxiperth.com.au/assets/uploads/service/wheel_chair.jpg"
        , content: "For years now, Maxi Taxi Perth has been offering safe and reliable services across Perth and nearby suburbs. We take immense pride in providing our customers with customised cab services at a reasonable price. Wheelchair taxis are essential for any medical or other appointment. However, you can also hire Maxi Taxi Perth cabs for daily errands as well. So given that you want to go shopping, visit a friend or family, we are at your service."
      }, {
        ServiceName: "Perth airport to Fremantle",
        Imgsrc: "https://www.maxitaxiperth.com.au/assets/uploads/service/080882300_1587053536.jpg",
        content: "Fremantle is a very famous city located merely 25 minutes drive from Perth city. Thousands of tourists visit Fremantle every year. It is famous for the largest convict-built prison (which is now available for tour) and its maritime museum located right at the edge of the ocean on Victoria quay. It is also a port city of Western Australia. There are plenty of more reason why people visit Fremantle "
      },
      {
        ServiceName: "Perth Airport To Mandurah",
        Imgsrc: "https://www.maxitaxiperth.com.au/assets/uploads/service/043059000_1610142148.jpg",
        content: "Mandurah is located in the Peel region of Western Australia and it is 73 km away from the city of Perth which is WA State’s capital. The city's name came from the aboriginal Noongar people they use to call it ''Mandjar '' meaning meeting place or trading place and after European settlement name change it to Mandurah, possibly due to mispronunciation. It is the state's second-largest city. There is a direct train line Perth-Mandurah railway line from Perth to Mandurah and a direct road called Kwinana freeway"
      },
      {
        ServiceName: "Airport Transfers Rockingham",
        Imgsrc: "https://www.maxitaxiperth.com.au/assets/uploads/service/043059000_1610142148.jpg",
        content: "Rockingham received its name from the sailing ship called '' Rockingham ''. It was one of the three boats' first one was ''Gilmore'' and the second '' Hoogly '' that Thomas Peel had chartered to carry settlers to WA. The vessel arrived on 14th May 1830. The city of Rockingham plays a vital role in the expansion of Western Australia. The Kwinana Freeway is merely 15 minutes drive from the primary center via Patterson and Thomas rd then to the Kwinana freeway. "
      }
    ];


  const {  width } = useWindowDimensions(); // get the current width of screen
  return (
    <div className='container flex flex-col min-h-screen min-w-full  items-center'>
      <div className='flex flex-col items-center text-center'>
        <div className='ServiceName serviceHeading p-1'>Our Services</div>
        <i className='serviceBorder mb-4'></i>
      </div>
      {   
        services.map(({ ServiceName, Imgsrc, content } , index)=>{
          let val = "" ;

           //  Alternate image-content 

         if(width>768)                      // if width > medium size srceen                                           
         {                                  //        if(index is even the flex direction is row)
           if (index % 2 === 0)             //         else flex direction is row reverse
             val = "flex-row";              // if width < medium size srceen
           else                             //          flex direction is column
             val = "flex-row-reverse";
         }
         else
          val  = "flex-col"
        return  ( 
          <div key ={index} className={`relative service p-1   flex ${val} h-fit`}>
            <div className=' md:w-[50%] '>
              <div className='relative image h-[100%] '>
                <img src={Imgsrc} alt="" className='md:h-full h-[300px] w-full' />
              </div>
            </div>
            <div className='md:w-[50%] content  flex flex-col items-center text-justify justify-around'>
              <div className='flex flex-col items-center text-center'>
                <div className='ServiceName serviceHeading p-3'>{ServiceName}</div>
                <i className='serviceBorder'></i>
              </div>
              <div className=' m-6  contentText '>
                {content}
              </div>
              <div className='self-start m-3 md:mb-14'> <Btn  buttonName={"Read More"}/></div>
            </div>
          </div>)
        })
      }
      

    </div>
  )
}
