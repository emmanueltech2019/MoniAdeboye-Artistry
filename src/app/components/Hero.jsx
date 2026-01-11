import React from 'react'
import Image from 'next/image'
import GlobalContainer from './GlobalContainer'
import background from '@/images/background.png'
import one from '@/images/one.jpg'

const Hero = () => {
  return (
    <div className="h-screen w-full relative">
        <Image src={one} width={1000} height={1000} alt='background' className='w-full h-full absolute opacity-50 top-0 left-0 object-cover' />
        <GlobalContainer className={'w-full h-full flex relative items-end py-20'}>
            <h1 className='md:text-7xl text-5xl'>BE BEAUTIFUL. <br /> BE YOU.</h1>
        </GlobalContainer>
    </div>
  )
}

export default Hero