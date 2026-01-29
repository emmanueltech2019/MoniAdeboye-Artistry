import { ArrowRight } from 'lucide-react'
import React from 'react'
import GlobalContainer from './GlobalContainer'

const ContactUsHero = () => {
  return (
    <GlobalContainer className="flex flex-col gap-10 md:w-[80%] mx-auto w-full">
        <div className='flex flex-col items-center w-full pt-40 pb-20 gap-5'>
            <h1 className="md:text-5xl text-2xl font-philosopher">CONTACTS</h1>
            <p className="font-sans md:px-80 text-center text-[18px]">Find the hairdresser you can't live without! Moni Adeboye Salon is located at 5th Avenue</p>
        </div>
        <div className="flex flex-col gap-5 items-center w-full">
            <div className="flex md:flex-row flex-col justify-between w-full gap-10">
                <div className="flex flex-col gap-5">
                    <span className='md:text-5xl text-2xl font-philosopher'>LOCATION</span>
                    <div className="flex md:gap-20 md:justify-start justify-between gap-5 items-center">
                        <div className="flex flex-col gap-1 tracking-widest text-[12px] font-semibold">
                            <p className="flex items-center">758 5TH AVENUE <ArrowRight className='-rotate-45' strokeWidth={1} size={15} /></p>
                            <p>IN THE HEART OF NYC</p>
                        </div>
                        <div className="w-[0.5px] h-13 bg-gray-300"></div>
                        <div className="flex flex-col gap-1 tracking-widest text-[12px] font-semibold">
                            <p className="flex items-center">+1-800-356-8933</p>
                            <p>BOOKING@DOMAIN.COM</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <span className='md:text-5xl text-2xl font-philosopher'>BUSINESS HOURS</span>
                    <div className="flex md:justify-start justify-between md:gap-20 gap-5 items-center">
                        <div className="flex flex-col gap-1 tracking-widest text-[12px] font-semibold">
                            <p className="flex items-center">TUESDAY - SUNDAY:</p>
                            <p>9:00 AM - 7:00 PM</p>
                        </div>
                        <div className="w-[0.5px] h-13 bg-gray-300"></div>
                        <div className="flex flex-col gap-1 tracking-widest text-[12px] font-semibold">
                            <p className="flex items-center">MONDAY</p>
                            <p>CLOSED</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </GlobalContainer>
  )
}

export default ContactUsHero