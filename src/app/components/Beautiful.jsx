import React from 'react'
import GlobalContainer from './GlobalContainer'
import Image from 'next/image'
import salonBackImage from '@/images/salonBackImage.png'
import salon from '@/images/seven.jpg'
import Link from 'next/link'

const Beautiful = () => {
  return (
    <GlobalContainer className={'md:py-30 relative'}>
        <h2 className='md:text-7xl text-4xl mb-10'>REDESIGNING YOUR  <br />NATURAL RADIANCE.!</h2>
        <div className="flex flex-col border-t border-[#d8d6d0] py-10 gap-10">
            <p>. The Salon</p>
            <div className="grid md:grid-cols-2 gap-10">
                <div className="relative h-100">
                    <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100524/Web_7_tzrbbw.jpg"} width={1000} height={1000} alt='salon' className='w-100 z-1 absolute bottom-0 left-1/2 -translate-x-1/2' />
                    <Image src={salonBackImage} width={1000} height={1000} alt='salonBackImage' className='w-80 absolute bottom-0 right-0' />
                </div>
                <div className="flex flex-col gap-3 md:w-[25rem] md:ms-20">
                    <p className='text-xl'>Moniadeboye Artistry is a premier makeup brand committed to the art of unveiling natural radiance. Our mission is to empower individuals by redesigning their natural features through sophisticated artistry. We specialize in creating high-end, timeless looks that celebrate your unique beauty, ensuring every client leaves feeling their most radiant self.</p>
                    <Link href={''}>Learn More</Link>
                </div>
            </div>
        </div>
    </GlobalContainer>
  )
}

export default Beautiful