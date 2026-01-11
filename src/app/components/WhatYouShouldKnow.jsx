import React from 'react'
import GlobalContainer from './GlobalContainer';
import fixedBackground from '@/images/fixedBackground.png'

const WhatYouShouldKnow = () => {
  return (
    <>
        <GlobalContainer className={'flex flex-col gap-10'}>
            <h6 className="md:text-6xl text-3xl">
                BALAYAGE, OMBRE, AND SOMBRE: <br /> WHAT YOU SHOULD KNOW
            </h6>
            <div className="flex justify-between items-center border-t border-[#d8d6d0] py-5">
                <p>.Blog</p>
                <p className='underline'>Read more</p>
            </div>
        </GlobalContainer>
        <div className="w-full h-[30rem] mb-20" style={{
            backgroundImage: `url(${fixedBackground.src})`,
            backgroundAttachment: 'fixed', 
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
        }}></div>
    </>
  )
}

export default WhatYouShouldKnow