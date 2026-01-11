import React from 'react'
import GlobalContainer from './GlobalContainer'
import hoursBackground from '@/images/hoursBackground.png'

const Creative = () => {
  return (
    <GlobalContainer className={'flex flex-col gap-20 my-20'}>
        <h6 className="md:text-5xl text-3xl">HOME TO THE BOROUGH'S MOST <br /> CREATIVE HAIR STYLISTS</h6>
        <div className="border-t border-[#d8d6d0] py-5 fle flex-col gap-10">
            <p>.Location & Hours</p>
            <div className="grid md:grid-cols-[4fr_8fr] mt-5">
                <div className="p-10 bg-[#eeebe2] flex flex-col gap-5">
                    <p className="text-3xl">HOURS</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <p>Monday - Friday</p>
                            <span>8:00AM - 7:00PM</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Saturday</p>
                            <span>8:00AM - 5:00PM</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Sunday</p>
                            <span>8:00AM - 3:00PM</span>
                        </div>
                    </div>
                    <div className="pt-5 border-t border-[#d8d6d0] flex flex-col gap-5">
                        <p className="text-3xl">LOCATION</p>
                        <div className="flex flex-col gap-2">
                            <p>+1-800_356-8933</p>
                            <p>example@gmail.com</p>
                            <p>In the heart of NYC:</p>
                            <p>758 5th Avenue, New York, NY 10057</p>
                        </div>
                        <button className="py-2 px-10 text-white bg-black">Book an appointment</button>
                    </div>
                </div>
                <div className="w-full h-full" style={{
                    backgroundImage: `url(${hoursBackground.src})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    backgroundRepeat: 'no-repeat'
                }}></div>
            </div>
        </div>
    </GlobalContainer>
  )
}

export default Creative