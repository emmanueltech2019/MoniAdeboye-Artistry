import React from 'react'
import GlobalContainer from './GlobalContainer'
import Image from 'next/image'
import salonBackImage from '@/images/salonBackImage.png'
import salon from '@/images/salon.png'
import Link from 'next/link'

const Beautiful = () => {
  return (
    <GlobalContainer className={'md:py-30 relative'}>
        <h2 className='md:text-7xl text-4xl mb-10'>BEAUTIFUL HAIR ? IT IS EASY <br /> AND WONDERFUL!</h2>
        <div className="flex flex-col border-t border-[#d8d6d0] py-10 gap-10">
            <p>. The Salon</p>
            <div className="grid md:grid-cols-2 gap-10">
                <div className="relative h-100">
                    <Image src={salon} width={1000} height={1000} alt='salon' className='w-100 z-1 absolute bottom-0 left-1/2 -translate-x-1/2' />
                    <Image src={salonBackImage} width={1000} height={1000} alt='salonBackImage' className='w-80 absolute bottom-0 right-0' />
                </div>
                <div className="flex flex-col gap-3 md:w-[25rem] ms-20">
                    <p className='text-xl'>We started as a small beauty studio in Brooklyn, New York. Our main idea was to create the best beauty studio in the world. Can there be compromises in the best studio in the world? Our answer is always no. We care about the best quality, hire specialists, and provide customer service. This approach allowed us to grow and create an excellent team passionate about everything we do.</p>
                    <Link href={''}>Learn More</Link>
                </div>
            </div>
        </div>
    </GlobalContainer>
  )
}

export default Beautiful