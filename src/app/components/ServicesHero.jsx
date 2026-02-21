'use client'
import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import GlobalContainer from './GlobalContainer'
import Image from 'next/image'
import AppointmentModal from './AppointmentModal'
import Appointment from './Appointment'
import two from '@/images/two.jpg'
import web6 from '@/images/web6.jpg'
import bridal1 from '@/images/bridal1.jpeg'
import bridal2 from '@/images/bridal2.png'
import bridal3 from '@/images/bridal3.png'
import bridal4 from '@/images/bridal4.png'
import glam1 from '@/images/glam1.png'
import glam2 from '@/images/glam2.png'
import glam3 from '@/images/glam3.png'
import glam4 from '@/images/glam4.png'

const ServicesHero = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <GlobalContainer className="flex flex-col gap-10 md:w-[80%] mx-auto w-full font-inter">
            <div className='flex flex-col items-center w-full pt-40 pb-20 gap-5'>
                <h1 className="md:text-5xl text-2xl font-philosopher">SERVICES</h1>
                <p className="font-sans md:px-56 text-center text-[18px]">We know the right treatment can make you look—and feel——like a million dollars. <br /> We are committed to only using top-of-the-line products for added luxury. Take time to pamper yourself by booking an appointment today.</p>
            </div>
        </GlobalContainer>
        <Image src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1770254374/image_16_i0rlsl.png'} width={1000} height={1000} alt='image' className='w-full md:h-120 h-50 object-cover' />
        <GlobalContainer className="grid md:grid-cols-[4fr_8fr] md:p-20 p-5 mx-auto w-full items-center">
            <div className='flex flex-col items-center w-full pb-20 gap-5'>
                <h1 className="md:text-5xl text-2xl font-philosopher">BRIDAL</h1>
                <p className="font-sans text-center text-[18px]">All services are inclusive of Premium <br /> shampoo & conditioner with head message!</p>
                <button className='cursor-pointer hover:border-b' onClick={() => setIsOpen(true)}>Book Now</button>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
                <Image src={bridal1} width={1000} height={1000} alt='image' className='md:h-120 h-50 object-cover' />
                <Image src={bridal2} width={1000} height={1000} alt='image' className='md:h-120 h-50 object-cover md:block hidden' />
                <Image src={bridal3} width={1000} height={1000} alt='image' className='md:h-120 h-50 object-cover md:block hidden' />
                <Image src={bridal4} width={1000} height={1000} alt='image' className='md:h-120 h-50 object-cover md:block hidden' />
            </div>
        </GlobalContainer>
        <GlobalContainer className="grid md:grid-cols-[4fr_8fr] md:p-20 p-5 mx-auto w-full items-center">
            <div className='flex flex-col items-center w-full pb-20 gap-5'>
                <h1 className="md:text-5xl text-2xl font-philosopher">BEAUTY</h1>
                <p className="font-sans text-center text-[18px]">The stay in our salon will bring you beauty <br /> pleasure, relax and good mood.</p>
                <button className='cursor-pointer hover:border-b' onClick={() => setIsOpen(true)}>Book Now</button>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
                <Image src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1771608570/IMG_8458_zvurey.jpg'} width={1000} height={1000} alt='image' className='w-full md:h-120 h-50 object-cover' />
                <Image src={two} width={1000} height={1000} alt='image' className='w-full md:h-120 h-50 object-cover md:block hidden' />
                <Image src={web6} width={1000} height={1000} alt='image' className='w-full md:h-120 h-50 object-cover md:block hidden' />
                <Image src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100530/Web_vratey.jpg'} width={1000} height={1000} alt='image' className='w-full md:h-120 h-50 object-cover md:block hidden' />
            </div>
        </GlobalContainer>
        <GlobalContainer className="grid md:grid-cols-[4fr_8fr] md:p-20 p-5 mx-auto w-full items-center">
            <div className='flex flex-col items-center w-full pb-20 gap-5'>
                <h1 className="md:text-5xl text-2xl font-philosopher">PARTY GLAM</h1>
                <p className="font-sans text-center text-[18px]">The stay in our salon will bring you beauty <br /> pleasure, relax and good mood.</p>
                <button className='cursor-pointer hover:border-b' onClick={() => setIsOpen(true)}>Book Now</button>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
                <Image src={glam1} width={1000} height={1000} alt='image' className='w-full md:h-120 h-50 object-cover' />
                <Image src={glam2} width={1000} height={1000} alt='image' className='w-full md:h-120 h-50 object-cover md:block hidden' />
                <Image src={glam3} width={1000} height={1000} alt='image' className='w-full md:h-120 h-50 object-cover md:block hidden' />
                <Image src={glam4} width={1000} height={1000} alt='image' className='w-full md:h-120 h-50 object-cover md:block hidden' />
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