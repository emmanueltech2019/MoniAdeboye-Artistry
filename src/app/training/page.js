'use client'

import React from 'react'
import GlobalContainer from '../components/GlobalContainer'
import Image from 'next/image'
import ten from '@/images/ten.jpg'
import professionalImg from '@/images/professionalImg.jpg' 
import brushesImg from '@/images/brushesImg.jpg'

const TrainingPage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <GlobalContainer className="flex flex-col gap-10 md:w-[80%] mx-auto w-full font-inter">
        <div className='flex flex-col items-center w-full pt-40 pb-10 gap-5'>
          <h1 className="md:text-5xl text-4xl font-philosopher text-center uppercase">
            Professional Makeup Training
          </h1>
          <p className="font-sans md:px-26 text-center text-[15px] leading-relaxed max-w-3xl text-gray-600">
            Structured hands-on training designed to build skill, confidence, and refined artistry. 
            From foundational techniques to advanced refinement for practicing artists.
          </p>
        </div>
      </GlobalContainer>

      {/* HERO IMAGE */}
      <div className="w-full mb-24">
        <Image
          src={ten}
          width={1500}
          height={1000}
          alt='training'
          className='w-full h-[650px] object-cover object-[center_25%]'
        />
      </div>

      {/* PROGRAMME SECTIONS */}
      <div className="flex flex-col gap-32 pb-32">
        
        {/* BEGINNER MAKEUP CLASS */}
        <GlobalContainer>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="md:w-1/2 w-full">
              <Image
                src={brushesImg}
                alt="Beginner Makeup Training"
                width={800}
                height={800}
                className="w-full h-[550px] object-cover rounded-sm shadow-sm"
              />
            </div>

            <div className="md:w-1/2 space-y-8 text-left">
              <div>
                <p className='text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold'>Foundation Level</p>
                <h2 className="text-4xl font-philosopher">Beginner Makeup Class</h2>
              </div>
              
              <p className="text-gray-600 font-sans text-lg leading-relaxed">
                Designed for individuals with little or no professional experience. Builds strong foundational skills, 
                product knowledge, and practical application technique from the ground up.
              </p>

              <div className="space-y-6 font-sans">
                <div className='border-l-2 border-black pl-6'>
                  <p className="font-bold text-xl uppercase tracking-tight">Option 1 — Intensive Course</p>
                  <p className="text-gray-500 italic mt-1">1 Month · 3 Classes Per Week · <span className='text-black font-semibold'>₦300,000</span></p>
                </div>

                <div className='border-l-2 border-black pl-6'>
                  <p className="font-bold text-xl uppercase tracking-tight">Option 2 — Extended Course</p>
                  <p className="text-gray-500 italic mt-1">2 Months · 3 Classes Per Week · <span className='text-black font-semibold'>₦500,000</span></p>
                </div>
              </div>
            </div>
          </div>
        </GlobalContainer>

        {/* UPGRADE / REFINEMENT CLASS */}
        <GlobalContainer>
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
            <div className="md:w-1/2 w-full">
              <Image
                src={professionalImg}
                alt="Advanced Makeup Refinement"
                width={800}
                height={800}
                className="w-full h-[550px] object-cover rounded-sm shadow-sm"
              />
            </div>

            <div className="md:w-1/2 space-y-8 text-left">
              <div>
                <p className='text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold'>For Practicing Artists</p>
                <h2 className="text-4xl font-philosopher">Upgrade / Refinement Class</h2>
              </div>
              
              <p className="text-gray-600 font-sans text-lg leading-relaxed">
                For working makeup artists ready to sharpen technique, improve finishing, and elevate overall service quality. 
                Focused on refinement, not the basics.
              </p>

              <div className="space-y-6 font-sans">
                <div className='border-l-2 border-black pl-6'>
                  <p className="font-bold text-xl uppercase tracking-tight">2-Week Upgrade</p>
                  <p className="text-gray-500 italic mt-1">3 Classes Per Week · <span className='text-black font-semibold'>₦200,000</span></p>
                </div>

                <div className='border-l-2 border-black pl-6'>
                  <p className="font-bold text-xl uppercase tracking-tight">1-Week Upgrade</p>
                  <p className="text-gray-500 italic mt-1">3 Classes Per Week · <span className='text-black font-semibold'>₦100,000</span></p>
                </div>
              </div>

              <div>
                <p className='text-xs font-bold uppercase mb-3 tracking-widest text-gray-400'>Focus Areas</p>
                <p className='text-sm leading-relaxed font-medium italic'>
                  Advanced skin preparation · Complexion perfection · Blending techniques · Product layering · Signature glam finishing
                </p>
              </div>
            </div>
          </div>
        </GlobalContainer>
      </div>

      {/* TERMS OF ENGAGEMENT */}
      <GlobalContainer>
        <div className="max-w-4xl mx-auto py-24">
          <h2 className="text-3xl font-philosopher text-center mb-16 uppercase tracking-widest">Terms of Engagement</h2>
          
          <div className="grid md:grid-cols-2 gap-12 font-sans text-[15px]">
            <div className="space-y-3">
              <h4 className="font-bold uppercase text-xs tracking-widest mb-4">Registration & Payment</h4>
              <ul className="space-y-2 text-gray-600 list-disc pl-4">
                <li>A 50% non-refundable deposit is required to secure your slot</li>
                <li>Full payment must be completed before training completion</li>
                <li>Slot is only confirmed after deposit is received</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold uppercase text-xs tracking-widest mb-4">Attendance & Punctuality</h4>
              <ul className="space-y-2 text-gray-600 list-disc pl-4">
                <li>All scheduled classes are compulsory</li>
                <li>Missed classes without prior notice may not be rescheduled</li>
                <li>Late arrival may reduce participation in practical sessions</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold uppercase text-xs tracking-widest mb-4">Materials & Certification</h4>
              <ul className="space-y-2 text-gray-600 list-disc pl-4">
                <li>Students provide their own makeup kits and tools</li>
                <li>Recommended kit list provided after registration</li>
                <li>Certificates issued upon demonstration of competence</li>
                <li>Full payment must be settled before certification</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold uppercase text-xs tracking-widest mb-4">Professional Conduct</h4>
              <ul className="space-y-2 text-gray-600 list-disc pl-4">
                <li>Respect for instructors and equipment is mandatory</li>
                <li>Students may be required to provide their own models</li>
                <li>Deposits are strictly non-refundable</li>
                <li>7 days notice required for rescheduling</li>
              </ul>
            </div>
          </div>

          {/* ENQUIRE NOW CTA */}
          <div className='mt-20 flex flex-col items-center gap-6 text-center pt-10'>
            <p className='font-sans tracking-wide uppercase text-sm'>Lagos, Nigeria · Limited slots available per cohort</p>
            <h3 className='font-philosopher text-2xl mb-6'>Ready to elevate your artistry?</h3>
            <a 
              href="https://wa.me/2348104505065" 
              target="_blank" 
              className='bg-black text-white px-10 py-4 font-philosopher text-lg hover:bg-zinc-800 transition-all inline-block'
            >
              Enquire Now
            </a>
          </div>
        </div>
      </GlobalContainer>
    </>
  )
}

export default TrainingPage