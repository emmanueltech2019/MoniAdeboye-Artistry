import React from 'react'
import Image from 'next/image'
import GlobalContainer from './GlobalContainer'
import background from '@/images/background.png'

const Hero = () => {
  return (
    <div className="h-screen w-full relative bg-red-500">
        <Image src={background} width={1000} height={1000} alt='background' className='w-full h-full absolute top-0 left-0 object-cover' />
        <GlobalContainer className={'w-full h-full flex items-end py-20'}>
            <h1 className='md:text-7xl text-5xl'>BE BEAUTIFUL. <br /> BE YOU.</h1>
        </GlobalContainer>
    </div>
  )
}

export default Hero