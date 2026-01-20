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
        <h2 className='md:text-7xl text-4xl mb-10'>MEET THE ARTIST</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-5 md:-mb-30 mb-5">
            <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100530/Web_9_qyvboq.jpg"} alt="Moni Adeboye Artistry Logo" width={1000} height={1000} className="w-full h-[100%] object-cover flex-shrink-0 md:-mb-0 -mb-40" />
            <div className="flex flex-col gap-3">
                <p>Hi, I'm <b>Moni Adeboye</b>, the Head Artist at Moni Adeboye Artistry. My work is centered on creating clean, lightweight, skin-focused makeup that enhances natural beauty and allows each client to feel confident, polished, and at ease.</p>
                <p>I believe makeup should feel personal, Every face, occasion, and vision is different, and my approach is always tailored - whether I'm working with a client or teaching. Alongside my artistry, I offer makeup training for both personal and professional use, designed to build confidence, refine technique, and help individuals truly understand their craft.</p>
                <p>Through thoughtful artistry and intentional education, my goal is to create experiences that are empowering, refined, and lasting - both in how my clients look and how they feel.</p>
            </div>
        </div>
        <h2 className='md:text-7xl text-3xl mb-10'>ELEVATED SERVICES FOR <br /> THE MODERN WOMAN</h2>
        <div className="grid md:grid-cols-[3fr_9fr] border-t border-[#d8d6d0] py-5">
            <p className='pb-5'>. Our Services</p>
            <div className="flex flex-col gap-10">
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="flex flex-col gap-3">
                        <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100537/Web_5_zilckz.jpg"} width={1000} height={1000} alt='hair' className='md:h-100 object-cover' />
                        <span className="text-xl">Bridal makeup</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100530/Web_vratey.jpg"} width={1000} height={1000} alt='beauty' className='md:h-100 object-cover' />
                        <span className="text-xl">Editorial and photoshoot makeup</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100536/Website_1_r76udd.jpg"} width={1000} height={1000} alt='hair' className='md:h-100 object-cover' />
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
                        <div className="grid grid-cols-4 ">
                            <span>DIY Makeup class</span>
                            <span>₦60,000</span>
                            <span>4Hours</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Walk-in Session</span>
                            <span>₦35,000</span>
                            <span>75 Minutes</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Walk-in Session + Gele (by the makeup artist)</span>
                            <span>₦40,000</span>
                            <span>90 Minutes</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Walk-in Session + Gele (professional ele artist)</span>
                            <span>₦50,000</span>
                            <span>90 Minutes</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Home Session - Yaba</span>
                            <span>₦55,000</span>
                            <span>90 Minutes</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Home Session - Surulere</span>
                            <span>₦60,000</span>
                            <span>90 Minutes</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Home Session - Ikeja</span>
                            <span>₦65,000</span>
                            <span>90 Minutes</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Home Session - Maryland</span>
                            <span>₦65,000</span>
                            <span>90 Minutes</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Home Session - Lekki 1</span>
                            <span>₦80,000</span>
                            <span>90 Minutes</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Home Session - Ikate / Osapa London</span>
                            <span>₦90,000</span>
                            <span>90 Minutes</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Home Session - Chevron / Lekki 2</span>
                            <span>₦100,000</span>
                            <span>90 Minutes</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Home Session - VGC</span>
                            <span>₦100,000</span>
                            <span>90 Minutes</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Home Session - Ago</span>
                            <span>₦70,000</span>
                            <span>90 Minutes</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Home Session - FESTAC</span>
                            <span>₦70,000</span>
                            <span>90 Minutes</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Home Session - Ojodu Berger</span>
                            <span>₦70,000</span>
                            <span>90 Minutes</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Home Session - Ilupeju</span>
                            <span>₦65,000</span>
                            <span>90 Minutes</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Home Session - Gbagada</span>
                            <span>₦60,000</span>
                            <span>90 Minutes</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Home Session - Agege</span>
                            <span>₦100,000</span>
                            <span>90 Minutes</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Home Session - Ebute Meta</span>
                            <span>₦60,000</span>
                            <span>90 Minutes</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Home Session - Magodo</span>
                            <span>₦70,000</span>
                            <span>90 Minutes</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Home Session - Ogudu</span>
                            <span>₦70,000</span>
                            <span>90 Minutes</span>
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