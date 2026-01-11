import React from 'react'
import guarantee from '@/images/guarantee.png'
import GlobalContainer from './GlobalContainer'

const Guarantee = () => {
  return (
    <div style={{
        backgroundImage: `url(${guarantee.src})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }} className='py-20 mb-20'>
        <GlobalContainer className={'flex flex-col gap-40 items-start w-120'}>
            <h3 className='text-3xl'>WE CAN GUARANTEE YOU HAVE NEVER RECEIVED AS MANY COMPLIMENTS AS YOU WILL, AFTER YOU BOOK A VISIT WITH US.</h3>
            <button className='py-2 px-10 bg-black text-white'>Book an appointment</button>
        </GlobalContainer>
    </div>
  )
}

export default Guarantee