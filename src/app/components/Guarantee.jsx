// import React from 'react'
// import guarantee from '@/images/eight.jpg'
// import GlobalContainer from './GlobalContainer'

// const Guarantee = () => {
//   return (
//     <div className='relative h-[40rem]'>
//       <div style={{
//           backgroundImage: `url(${guarantee.src})`,
//           backgroundPosition: 'center', 
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat'
//       }} className='py-20 h-full mb-20 [mask-image:linear-gradient(to_top,black_30%,transparent_100%)] md:[mask-image:none]'>
//       </div>
//       <GlobalContainer className={'flex flex-col md:gap-40 gap-5 items-start w-120 absolute top-20 left-0'}>
//           <h3 className='text-3xl'>WE CAN GUARANTEE YOU HAVE NEVER RECEIVED AS MANY COMPLIMENTS AS YOU WILL, AFTER YOU BOOK A VISIT WITH US.</h3>
//           <button className='py-2 px-10 bg-black text-white'>Book an appointment</button>
//       </GlobalContainer>
//     </div>
//   )
// }

// export default Guarantee

import React from 'react'
import guarantee from '@/images/eight.jpg'
import GlobalContainer from './GlobalContainer'

const Guarantee = () => {
  return (
    <div className='relative h-[40rem] overflow-hidden'>
      {/* Background Image Layer */}
      <div 
        style={{
          backgroundImage: `url(${guarantee.src})`,
          backgroundPosition: 'center', 
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }} 
        className='absolute inset-0 py-20 [mask-image:linear-gradient(to_top,black_30%,transparent_100%)] md:[mask-image:none]'
      />

      {/* Dark Overlay Layer - Makes text clearer */}
      <div className='absolute inset-0 bg-black/40' />

      {/* Content Layer */}
      <GlobalContainer className={'flex flex-col md:gap-40 gap-5 items-start w-full md:w-1/2 absolute top-1/2 -translate-y-1/2 left-0 z-10'}>
          <h3 className='text-3xl font-medium text-white'>
            WE CAN GUARANTEE YOU HAVE NEVER RECEIVED AS MANY COMPLIMENTS AS YOU WILL, AFTER YOU BOOK A VISIT WITH US.
          </h3>
          <button className='py-3 px-10 bg-white text-black font-bold hover:bg-black hover:text-white transition-colors'>
            BOOK YOUR SESSION
          </button>
      </GlobalContainer>
    </div>
  )
}

export default Guarantee