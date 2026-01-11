import React from 'react'
import guarantee from '@/images/eight.jpg'
import GlobalContainer from './GlobalContainer'

const Guarantee = () => {
  return (
    <div className='relative h-[40rem]'>
      <div style={{
          backgroundImage: `url(${guarantee.src})`,
          backgroundPosition: 'center', 
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
      }} className='py-20 h-full mb-20 [mask-image:linear-gradient(to_top,black_30%,transparent_100%)] md:[mask-image:none]'>
      </div>
      <GlobalContainer className={'flex flex-col md:gap-40 gap-5 items-start w-120 absolute top-20 left-0'}>
          <h3 className='text-3xl'>WE CAN GUARANTEE YOU HAVE NEVER RECEIVED AS MANY COMPLIMENTS AS YOU WILL, AFTER YOU BOOK A VISIT WITH US.</h3>
          <button className='py-2 px-10 bg-black text-white'>Book an appointment</button>
      </GlobalContainer>
    </div>
  )
}

export default Guarantee