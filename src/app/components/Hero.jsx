import React from 'react'
import Image from 'next/image'
import GlobalContainer from './GlobalContainer'
import background from '@/images/background.png'
import one from '@/images/one.jpg'

const Hero = () => {
  return (
    <div className="h-screen w-full relative">
        <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100530/Web_9_qyvboq.jpg"} width={1000} height={1000} alt='background' className='w-full h-full absolute opacity-50 top-0 left-0 object-cover' />
        <GlobalContainer className={'w-full h-full flex relative items-end py-20'}>
            <h1 className='md:text-7xl text-5xl'>WHERE ARTISTRY. <br /> MEETS ELEGANCE.</h1>
        </GlobalContainer>
    </div>
  )
}

export default Hero