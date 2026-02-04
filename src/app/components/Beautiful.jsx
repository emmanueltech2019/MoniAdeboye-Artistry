import React from 'react'
import GlobalContainer from './GlobalContainer'
import Image from 'next/image'
import salonBackImage from '@/images/salonBackImage.png'
import salon from '@/images/seven.jpg'
import Link from 'next/link'

const Beautiful = () => {
  return (
    // <GlobalContainer className={'md:py-5 relative'}>
    //     <h2 className='md:text-7xl text-4xl mb-5'>REDESIGNING YOUR  <br />NATURAL RADIANCE.!</h2>
    //     <div className="flex flex-col border-t border-[#d8d6d0] py-10 gap-10">
    //         <p>. The Salon</p>
    //         <div className="grid md:grid-cols-2 gap-10">
    //             <div className="relative h-100">
    //                 <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100524/Web_7_tzrbbw.jpg"} width={1000} height={1000} alt='salon' className='w-100 z-1 absolute bottom-0 left-1/2 -translate-x-1/2' />
    //                 <Image src={salonBackImage} width={1000} height={1000} alt='salonBackImage' className='w-80 absolute bottom-0 right-0' />
    //             </div>
    //             <div className="flex flex-col gap-3 md:w-[25rem] md:ms-20">
    //                 <p className='text-xl'>Moniadeboye Artistry is a premier makeup brand committed to the art of unveiling natural radiance. Our mission is to empower individuals by redesigning their natural features through sophisticated artistry. We specialize in creating high-end, timeless looks that celebrate your unique beauty, ensuring every client leaves feeling their most radiant self.</p>
    //                 <Link href={''}>Learn More</Link>
    //             </div>
    //         </div>
    //     </div>
    // </GlobalContainer>
    <GlobalContainer className={'md:py-24 py-12 bg-[#FAF9F6]'}>
    {/* Subtle Label */}
    <div className="flex items-center gap-2 mb-8">
        <span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium" style={{color:"#d0813c"}}>The Studio</p>
    </div>

    <h2 className='md:text-2xl text-medium mb-16 font-serif leading-[1.1] text-neutral-800 italic'>
        Redesigning your <br /> natural radiance.
    </h2>

    <div className="grid md:grid-cols-[7fr_5fr] items-center gap-16 md:gap-24">
        {/* Layered Image Composition */}
        <div className="relative">
            <div className="aspect-4/5 overflow-hidden rounded-sm">
                 <Image 
                    src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100524/Web_7_tzrbbw.jpg"} 
                    width={500} height={500} alt='Moni Adeboye' 
                    className='w-full h-full object-cover grayscale-[15%]' 
                />
            </div>
            {/* The "Shadow/Leaf" image becomes a floating accent */}
            <div className="absolute -bottom-10 -right-10 w-1/2 hidden md:block border-[12px] border-[#FAF9F6]">
                <Image src={salonBackImage} width={500} height={500} alt='Atmosphere' className='w-full object-cover' />
            </div>
        </div>

        {/* Purposeful Copy */}
        <div className="flex flex-col gap-8 md:pr-10">
            <div className="space-y-6">
                <p className='text-lg md:text-xl leading-relaxed text-neutral-600 font-light'>
                    Moniadeboye Artistry is a premier makeup brand committed to the art of <span className="italic text-neutral-800">unveiling natural radiance</span>. 
                </p>
                <p className='text-lg leading-relaxed text-neutral-500'>
                    Our mission is to empower individuals by redesigning their natural features through sophisticated artistry. We specialize in high-end, timeless looks that celebrate your unique beauty.
                </p>
            </div>
            
            <Link href={'/about'} className="group flex items-center gap-4 text-sm uppercase tracking-widest text-neutral-800 font-semibold" style={{color:"#d0813c"}}>
                Discover our story
                <span className="h-[1px] w-8 bg-neutral-300 group-hover:w-16 transition-all duration-500"></span>
            </Link>
        </div>
    </div>
</GlobalContainer>
  )
}

export default Beautiful