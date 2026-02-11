import React from 'react'
import GlobalContainer from './GlobalContainer'
import Image from 'next/image'
import beauty from '@/images/three.jpg'
import nails from '@/images/six.jpg'
import hair from '@/images/four.jpg'
import Link from 'next/link'

const Beauty = () => {
  return (
    <GlobalContainer className={'py-10 relative font-inter text-[#4A4A4A]'}>
        {/* <h2 className='md:text-7xl text-4xl mb-10'>MEET THE ARTIST</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-5 md:-mb-30 mb-5">
            <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100537/Web_5_zilckz.jpg"} alt="Moni Adeboye Artistry Logo" width={1000} height={1000} className="w-full md:h-[60%] h-[100%] object-cover object-center flex-shrink-0 md:-mb-0 -mb-40" />
            <div className="flex flex-col gap-3">
                <p>Hi, I&quot;m <b>Moni Adeboye</b>, the Head Artist at Moni Adeboye Artistry. My work is centered on creating clean, lightweight, skin-focused makeup that enhances natural beauty and allows each client to feel confident, polished, and at ease.</p>
                <p>I believe makeup should feel personal, Every face, occasion, and vision is different, and my approach is always tailored - whether I'm working with a client or teaching. Alongside my artistry, I offer makeup training for both personal and professional use, designed to build confidence, refine technique, and help individuals truly understand their craft.</p>
                <p>Through thoughtful artistry and intentional education, my goal is to create experiences that are empowering, refined, and lasting - both in how my clients look and how they feel.</p>
            </div>
        </div> */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
  <h2 className="md:text-7xl text-4xl mb-12 uppercase tracking-tight text-[#d0813c]" style={{color:"#d0813c"}}>
    Meet the Artist
  </h2>
  
  <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-10 items-start">
    {/* Image Container */}
    <div className="w-full">
      <Image 
        src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100537/Web_5_zilckz.jpg"} 
        alt="Moni Adeboye - Head Artist" 
        width={500} 
        height={600} 
        className="w-full aspect-[4/5] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
      />
    </div>

    {/* Text Content */}
    <div className="flex flex-col justify-center h-full">
      <h3 className="text-2xl mb-6 font-medium text-neutral-800" >
        Hi there, I’m <span className="italic">Moni Adeboye</span>
      </h3>
      
      <div className="space-y-6 text-lg leading-relaxed text-neutral-600 font-light">
        <p>
          I am a professional makeup artist with over a decade of experience, 
          including four years as a full-time beauty professional.
        </p>
        <p>
          As a certified bridal artist, my style is all about creating 
          <span className="font-semibold text-neutral-800"> clean, lightweight, and skin-like glam </span> 
          that enhances your natural beauty while leaving you polished, radiant, and confident.
        </p>
      </div>
      
      <div className="mt-10 border-t border-neutral-200 pt-6">
        <button className="text-sm tracking-widest uppercase text-neutral-400">Learn more</button>
      </div>
    </div>
  </div>
</section>
        {/* <h2 className='md:text-7xl text-3xl mb-10'>ELEVATED SERVICES FOR <br /> THE MODERN WOMAN</h2>
        <div className="grid md:grid-cols-[3fr_9fr] border-t border-[#d8d6d0] py-5">
            <p className='pb-5'>. Our Services</p>
            <div className="flex flex-col gap-10">
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="flex flex-col gap-3">
                        <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100529/Web_2_knbhbv.jpg"} width={1000} height={1000} alt='hair' className='md:h-100 object-cover' />
                        <span className="text-xl">Bridal makeup</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100529/Web_1.0_ucdq5b.jpg"} width={1000} height={1000} alt='beauty' className='md:h-100 object-cover' />
                        <span className="text-xl">Editorial and photoshoot makeup</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100536/Website_1_r76udd.jpg"} width={1000} height={1000} alt='hair' className='md:h-100 object-cover' />
                        <span className="text-xl">Event and party makeup</span>
                    </div>
                </div>
                 <div className="mt-10 border-t border-neutral-200 pt-6">
        <button className="text-sm tracking-widest uppercase text-neutral-400 border rounded-3xl px-4 py-2">Services</button>
      </div>
            </div>
        </div> */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-[#FAF9F6]"> {/* Soft off-white background */}
  {/* <h2 className='md:text-7xl text-3xl mb-12 font-serif leading-tight tracking-tight text-neutral-800'>
    ELEVATED SERVICES FOR <br className="hidden md:block" /> THE MODERN WOMAN
  </h2> */}

  <div className="grid md:grid-cols-[2fr_10fr] border-t border-[#d8d6d0] pt-8">
    {/* Left Label */}
    <div className="pb-5">
      <p className='text-xs uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-2' style={{color:"#d0813c"}}>
        <span className="w-1 h-1 bg-neutral-300 rounded-full"></span> Our Services
      </p>
    </div>

    {/* Services Grid */}
    <div className="flex flex-col gap-16">
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Bridal Makeup */}
        <div className="group cursor-pointer">
          <div className="overflow-hidden mb-4">
            <Image 
              src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100529/Web_2_knbhbv.jpg"} 
              width={1000} height={1000} alt='Bridal Makeup' 
              className='md:h-[450px] w-full object-cover transition-transform duration-700 group-hover:scale-105' 
            />
          </div>
          <h4 className="text-lg font-serif italic text-neutral-700 group-hover:text-neutral-900 transition-colors">Bridal Makeup</h4>
        </div>

        {/* Editorial Makeup */}
        <div className="group cursor-pointer">
          <div className="overflow-hidden mb-4">
            <Image 
              src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100529/Web_1.0_ucdq5b.jpg"} 
              width={1000} height={1000} alt='Editorial Makeup' 
              className='md:h-[450px] w-full object-cover transition-transform duration-700 group-hover:scale-105' 
            />
          </div>
          <h4 className="text-lg font-serif italic text-neutral-700 group-hover:text-neutral-900 transition-colors">Editorial & Photoshoot</h4>
        </div>

        {/* Event Makeup */}
        <div className="group cursor-pointer">
          <div className="overflow-hidden mb-4">
            <Image 
              src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100536/Website_1_r76udd.jpg"} 
              width={1000} height={1000} alt='Event Makeup' 
              className='md:h-[450px] w-full object-cover transition-transform duration-700 group-hover:scale-105' 
            />
          </div>
          <h4 className="text-lg font-serif italic text-neutral-700 group-hover:text-neutral-900 transition-colors">Event & Party Glam</h4>
        </div>

      </div>

      {/* Action Area */}
      <div className="mt-4 flex justify-end">
        <button className="text-xs tracking-[0.3em] uppercase text-neutral-500 border border-neutral-300 rounded-full px-10 py-4 hover:bg-neutral-800 hover:text-white hover:border-neutral-800 transition-all duration-300">
          Explore All Services
        </button>
      </div>
    </div>
  </div>
</section>
    </GlobalContainer>
  )
}

export default Beauty