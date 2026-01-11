import React from 'react'
import Image from 'next/image'
import GlobalContainer from './GlobalContainer'
import mark from '@/images/nine.jpg'
import jessica from '@/images/ten.jpg'

const Team = () => {
  return (
    <GlobalContainer className='my-20 flex flex-col gap-10'>
        <h4 className='md:text-5xl md:w-1/2 text-3xl'>TEAM OF HIGHLY TRAINED & SKILLED STYLISTS</h4>
        <div className="border-t border-[#d8d6d0] py-5">
            <div className="grid md:grid-cols-2">
                <div className="flex flex-col gap-20">
                    <p>. Artists</p>
                    <div className="flex flex-col gap-10">
                        <p className='underline'>Meet the team</p>
                    </div>
                    <div className="flex items-end gap-3">
                        <Image src={mark} width={1000} height={1000} alt='mark' className='w-[70%] saturate-0' />
                        <div className="flex flex-col gap-3">
                            <p className='text-xl'>MARK HARRIS</p>
                            <span className="text-sm">Owner & Senior Stylist</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-20">
                    <p>. Artists</p>
                    <p className="text-xl">Our Coiffure team comprises stylists with 10+ years of experience. Highly trained and skilled stylist ready to serve you every day.</p>
                    <div className="flex items-end gap-3 mt-auto">
                        <Image src={jessica} width={1000} height={1000} alt='mark' className='w-[70%] saturate-0' />
                        <div className="flex flex-col gap-3">
                            <p className='text-xl'>MARK HARRIS</p>
                            <span className="text-sm">Owner & Senior Stylist</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </GlobalContainer>
  )
}

export default Team