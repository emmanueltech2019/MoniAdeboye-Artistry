import React from 'react'
import Image from 'next/image'
import GlobalContainer from './GlobalContainer'
import background from '@/images/background.png'
import one from '@/images/one.jpg'

const Hero = () => {
  return (
    <div className="h-screen w-full relative md:hidden">
        <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100530/Web_9_qyvboq.jpg"} width={1000} height={1000} alt='background' className='w-full h-full absolute opacity-50 top-0 left-0 object-cover' />
        <GlobalContainer className={'w-full h-full flex flex-col relative justify-end py-10'}>
            <h1 className='md:text-7xl text-5xl uppercase'>Moni Adeboye Artistry</h1>
            <span className='md:text-7xl text-5xl'>WHERE ARTISTRY. <br /> MEETS ELEGANCE.</span>
            <p className='md:pe-200'>Moni Adeboye Artistry is a skin-focused makeup studio dedicated to creating clean, seamless looks that enhance natural beauty. Every experience is thoughtfully tailored, delivering refined, confidence-boosting results for every occasion.</p>
        </GlobalContainer>
    </div>
  )
}

export default Hero