import React from 'react'
import Btn from './components/btn'
export default function WhyChoose() {

    // array of feature contain name ,about , img

    const features = [

        {
            fName: "No call-out fee",
            fAbout: "At Maxi Taxi Perth, we don’t charge a call-out fee (save $1.50)",
            fImg: "./components/featureImages/call.png"
        },
        {
            fName: "Meter or fixed fare",
            fAbout: "Choose meter fare or opt for a set price to avoid surprises",
            fImg: "./components/featureImages/meter or fixed.png",
        }, {
            fName: "Standard taxi rates",
            fAbout: "We provide premium services at standard taxi rates (normal tariffs)",
            fImg: "./components/featureImages/Book Online.png"
        }, {
            fName: "Direct communication",
            fAbout: "Speak directly to the taxi driver, not just some phone operator",
            fImg: "./components/featureImages/standard taxi rates.png"
        }, {
            fName: "Arrival alerts",
            fAbout: "Get a text message when we’re 10 minutes away (free service)",
            fImg: "./components/featureImages/online taxi fare calculator.png"
        }, {
            fName: "Online taxi fare calculator",
            fAbout: "Estimate your taxi fare with our online calculator",
            fImg: undefined,
        }, {
            fName: "Group transfers:",
            fAbout: "Efficient transfers of large groups is one of our specialties",
            fImg: undefined
        },

    ]


    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center text-center'>
                <div className='ServiceName serviceHeading p-3'>WHY CHOOSE US ?</div>
                <i className='serviceBorder'></i>
            </div>
            <div className='text-center contentText'>
                <p>When you’re looking for a good, reliable taxi service in Greater Perth, there are plenty 
                of good reasons to choose us. We’ll highlight a few of those reasons below, but for the full list of benefits of using our services,
                 go to Why choose Maxi Taxi Perth.</p>
            </div>
            <p className='text-center '>
                {
                    features.map(({ fName, fAbout }) => {
                        return (
                            <span key ={fName}>&#x2022;<strong> {fName}</strong>{fAbout} </span>
                        )
                    })}
            </p>

            <div className='grid md:grid-cols-5 gap-4 grid-flow-row w-[70%] m-10'>
                {
                    features.map((feature ,index) => {

                        return (
                            (feature.fImg) && <div key = {index} className=' border flex flex-col  items-center justify-center text-center'>
                                <img className='bg-[#2d3239] inline-block scale-100 p-2 mt-7' src={require(`${feature.fImg}`)} alt="" />
                                <span className='font-bold' >{feature.fName}</span>
                                </div>)})
                }
            </div>
             <div className='m-6'>
                <Btn buttonName='Know More' />
             </div>
        </div>
    )
}
