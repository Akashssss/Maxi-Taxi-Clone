import React from 'react'
import Carousel from 'react-multi-carousel'; // react multi carousel package npm
import 'react-multi-carousel/lib/styles.css';// carousel style 
import Reviews from './components/Reviews'; // review container creator component

export default function Testimonials() {

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

                    // Array of reviewers data 
    const persons = [
        {
            reviewer: "Rahul Gambhir",
            image: "https://www.maxitaxiperth.com.au/assets/uploads/testimonial/1520318373.jpg",
            review: "Luxary and comfort at its best ."
        },
        {
            reviewer: "Cathy Howitt",
            image: "https://www.maxitaxiperth.com.au/assets/uploads/testimonial/1520318452.jpg",
            review: "Grest service getting my family of 8 and 24 suiitcases to the sirport.Very friendly helpful driver.Make it all easy for us at 2am in the morning."
        },

        {
            reviewer: "Kerry Mcsweeney",
            image: undefined,
            review: "Have used this maxi cab 3 times for early pickup & dropoff to Perth international airport and the service has been excellent! Always on time, friendly, Happy driver and well priced. Will always use this company. ! Highly recommend!"
        },

        {
            reviewer: "Larry Mulder",
            image: undefined,
            review: "Excellent.Dropped us off and was waiting for us on arrival.Made getting home with 5 people and luggage stress free."}] ;



  return (
      <div className='w-[100vw] h-min-[250px] border '>
          <div className="testimonial-bg flex flex-col justify-center p-9 ">
              <div className='flex flex-col items-center text-center text-white'>
                  <div className='ServiceName serviceHeading p-3 m-2'>TESTIMONIALS</div>
                  <i className='serviceBorder mb-7'></i>
              </div>
              <Carousel className='text-white '
                  responsive={responsive}
                  showDots={true}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                  arrows={false}>
                  {persons.map(({ reviewer, review, image }) => {
                      return (
                          <Reviews key = {reviewer} reviewer={reviewer} review={review} image={image} />)
                  })}
              </Carousel>
         </div>
    </div>
  )
}
