import React from 'react'
import GlobalContainer from './GlobalContainer'
import Image from 'next/image'
import beauty from '@/images/three.jpg'
import nails from '@/images/six.jpg'
import hair from '@/images/four.jpg'
import Link from 'next/link'

const Beauty = () => {
  return (
    <GlobalContainer className={'py-30 relative'}>
        <h2 className='md:text-7xl text-4xl mb-10'>ELEVATED SERVICES FOR <br /> THE MODERN WOMAN</h2>
        <div className="grid md:grid-cols-[3fr_9fr] border-t border-[#d8d6d0] py-5">
            <p className='pb-5'>. Our Services</p>
            <div className="flex flex-col gap-10">
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="flex flex-col gap-3">
                        <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100537/Web_5_zilckz.jpg"} width={1000} height={1000} alt='hair' className='md:h-100' />
                        <span className="text-xl">Bridal makeup</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100530/Web_vratey.jpg"} width={1000} height={1000} alt='beauty' className='md:h-100' />
                        <span className="text-xl">Editorial and photoshoot makeup</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100536/Website_1_r76udd.jpg"} width={1000} height={1000} alt='hair' className='md:h-100' />
                        <span className="text-xl">Event and party makeup</span>
                    </div>
                </div>
                <div className="border-y py-5 border-[#d8d6d0]">
                    <div className="flex flex-col gap-10">
                        <div className="grid grid-cols-4">
                            <span>Bridal makeup</span>
                            <span>₦30,000</span>
                            <span>Editorial and photoshoot makeup</span>
                            <span>₦30,000</span>
                        </div>
                        <div className="grid grid-cols-4">
                            <span>Event and party makeup</span>
                            <span>₦30,000</span>
                            <span>Makeup for film and TV</span>
                            <span>₦30,000</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Personal makeup classes (self-application)</span>
                            <span>₦70,000</span>
                            <span>Makeup Training </span>
                            <span>₦120,000</span>
                        </div>
                    </div>
                </div>
                <Link href={''}>View all services & pricing</Link>
            </div>
        </div>
    </GlobalContainer>
  )
}

export default Beauty