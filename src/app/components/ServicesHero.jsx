'use client'
import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import GlobalContainer from './GlobalContainer'
import Image from 'next/image'
import AppointmentModal from './AppointmentModal'
import Appointment from './Appointment'
import three from '@/images/three.jpg'
import web6 from '@/images/web6.jpg'
import ten from '@/images/ten.jpg'
import beautityEditorial from '@/images/beautyEditorial.jpg'
import glam1 from '@/images/glam1.png'
import glam2 from '@/images/glam2.png'
import glam3 from '@/images/glam3.png'
import glam4 from '@/images/glam4.png'
import bridal1 from '@/images/bridal1.jpeg'
import bridal2 from '@/images/bridal2.png'
import bridal3 from '@/images/bridal3.png'
import bridal4 from '@/images/bridal4.png'
import photoShoot1 from '@/images/photoShoot1.jpeg'
import photoShoot2 from '@/images/nine.jpg'
import photoShoot3 from '@/images/photoShoot3.jpeg'
import photoShoot4 from '@/images/photoShoot4.jpg'
import replaceEvent from '@/images/replaceEvent.jpeg'
import replaceBridal from '@/images/replaceBridal.jpeg'
import servicesHeroBackground from '@/images/servicesHeroBackground.jpeg'

const ServicesHero = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <GlobalContainer className="flex flex-col gap-10 md:w-[80%] mx-auto w-full font-inter">
            <div className='flex flex-col items-center w-full pt-40 pb-20 gap-5'>
                <h1 className="md:text-5xl text-2xl font-philosopher">SERVICES</h1>
                <p className="font-sans md:px-26 text-center text-[18px]">The right beauty experience does more than transform how you look, it refines how you present yourself.<br /> At Moni Adeboye Studio, every service is delivered with precision, intention, and a commitment to refined execution. We work with high-performance, professional-grade products to ensure flawless results that photograph beautifully and wear seamlessly. Each appointment is designed to be calm, structured, and detail-focused—so you leave polished, confident, and impeccably prepared for your moment. <br /> Book your session and experience beauty, executed with intention.</p>
            </div>
        </GlobalContainer>
        <Image src={servicesHeroBackground} width={1000} height={1000} alt='image' className='w-full object-top object-cover' />
        <GlobalContainer className="grid md:grid-cols-[4fr_8fr] md:p-20 p-5 mx-auto w-full items-center">
            <div className='flex flex-col items-center w-full pb-20 gap-5'>
                <h1 className="md:text-5xl text-2xl font-philosopher">BRIDAL</h1>
                <button className='cursor-pointer hover:border-b' onClick={() => setIsOpen(true)}>Book Now</button>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
                <Image src={bridal1} width={1000} height={1000} alt='image' className='w-full h-full object-top object-cover' />
                <Image src={bridal2} width={1000} height={1000} alt='image' className='w-full h-full object-top object-cover md:block hidden' />
                <Image src={replaceBridal} width={1000} height={1000} alt='image' className='w-full h-full object-top object-cover md:block hidden' />
                <Image src={bridal4} width={1000} height={1000} alt='image' className='w-full h-full object-top object-cover md:block hidden' />
            </div>
        </GlobalContainer>
        <GlobalContainer className="grid md:grid-cols-[4fr_8fr] md:p-20 p-5 mx-auto w-full items-center">
            <div className='flex flex-col items-center w-full pb-20 gap-5'>
                <h1 className="md:text-5xl text-2xl font-philosopher">BEAUTY EDITORIAL</h1>
                <button className='cursor-pointer hover:border-b' onClick={() => setIsOpen(true)}>Book Now</button>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
                <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1771608521/IMG_8475_sxzqik.jpg"} width={1000} height={1000} alt='image' className='h-full object-top object-cover' />
                <Image src={three} width={1000} height={1000} alt='image' className='h-full object-top object-cover md:block hidden' />
                <Image src={ten} width={1000} height={1000} alt='image' className='h-full object-top object-cover md:block hidden' />
                <Image src={beautityEditorial} width={1000} height={1000} alt='image' className='h-full object-top object-cover md:block hidden' />
            </div>
        </GlobalContainer>
        <GlobalContainer className="grid md:grid-cols-[4fr_8fr] md:p-20 p-5 mx-auto w-full items-center">
            <div className='flex flex-col items-center w-full pb-20 gap-5'>
                <h1 className="md:text-5xl text-2xl font-philosopher">PARTY GUEST GLAM</h1>
                <button className='cursor-pointer hover:border-b' onClick={() => setIsOpen(true)}>Book Now</button>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
                <Image src={replaceEvent} width={1000} height={1000} alt='image' className='w-full md:h-120 h-80 object-top object-cover' />
                <Image src={glam1} width={1000} height={1000} alt='image' className='w-full md:h-120 h-80 object-top object-cover md:block hidden' />
                <Image src={glam3} width={1000} height={1000} alt='image' className='w-full md:h-120 h-80 object-top object-cover md:block hidden' />
                <Image src={glam4} width={1000} height={1000} alt='image' className='w-full md:h-120 h-80 object-top object-cover md:block hidden' />
            </div>
        </GlobalContainer>
        <GlobalContainer className="grid md:grid-cols-[4fr_8fr] md:p-20 p-5 mx-auto w-full items-center">
            <div className='flex flex-col items-center w-full pb-20 gap-5'>
                <h1 className="md:text-5xl text-2xl font-philosopher">PHOTOSHOOT</h1>
                <button className='cursor-pointer hover:border-b' onClick={() => setIsOpen(true)}>Book Now</button>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
                <Image src={photoShoot1} width={1000} height={1000} alt='image' className='w-full md:h-120 h-80 object-top object-cover' />
                <Image src={three} width={1000} height={1000} alt='image' className='w-full md:h-120 h-80 object-top object-cover md:block hidden' />
                <Image src={photoShoot3} width={1000} height={1000} alt='image' className='w-full md:h-120 h-80 object-top object-cover md:block hidden' />
                <Image src={photoShoot4} width={1000} height={1000} alt='image' className='w-full md:h-120 h-80 object-top object-cover md:block hidden' />
            </div>
        </GlobalContainer>
        {/* <GlobalContainer className="flex flex-col gap-10 md:w-[80%] mx-auto w-full">
            <div className='flex flex-col items-center w-full pt-40 pb-20 gap-5'>
                <h1 className="md:text-5xl text-2xl font-philosopher">NAILS</h1>
                <p className="font-sans md:px-56 text-center text-[18px]">We use only the best products from top <br /> brands to ensure the highest quality finish.</p>
                <button className='cursor-pointer hover:border-b' onClick={() => setIsOpen(true)}>Book Now</button>
            </div>
        </GlobalContainer> */}
        {/* <GlobalContainer className={'grid mb-20 md:grid-cols-3 grid-cols-1 md:gap-5 gap-10'}>
            <div className="flex flex-col md:items-start items-center gap-3 md:text-start text-center md:px-20">
                <Image alt='image' src={'https://coiffure.vamtam.com/wp-content/uploads/2023/01/GettyImages-1441495005.svg'} width={1000} height={1000} className='w-30 h-30' />
                <h4 className='font-philosopher md:text-2xl text-xl'>WE LOVE YOUR HAIR</h4>
                <p className="text-[18px]">We are well equipped with years of hair know-how, and ready to create your best look with natural products.</p>
            </div>
            <div className="flex flex-col md:items-start items-center gap-3 md:text-start text-center md:px-20">
                <Image alt='image' src={'https://coiffure.vamtam.com/wp-content/uploads/2023/02/GettyImages-1280565878.svg'} width={1000} height={1000} className='w-30 h-30' />
                <h4 className='font-philosopher md:text-2xl text-xl'>ONLY NATURAL PRODUCTS</h4>
                <p className="text-[18px]">Hair is our passion, and our passion shows on every client that walks out of our doors full of confidence.</p>
            </div>
            <div className="flex flex-col md:items-start items-center gap-3 md:text-start text-center md:px-20">
                <Image alt='image' src={'https://coiffure.vamtam.com/wp-content/uploads/2023/02/GettyImages-1450756479.svg'} width={1000} height={1000} className='w-30 h-30' />
                <h4 className='font-philosopher md:text-2xl text-xl'>PROFESSIONAL STYLISTS</h4>
                <p className="text-[18px]">If you have a look you want but don't know how to achieve, we can work together to form a plan for your hair.</p>
            </div>
        </GlobalContainer> */}
        <Appointment />
        <AppointmentModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

export default ServicesHero