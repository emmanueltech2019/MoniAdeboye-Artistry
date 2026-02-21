import Image from 'next/image'
import React from 'react'
import GlobalContainer from '../components/GlobalContainer'

const page = () => {
  return (
    <>
      <GlobalContainer className="flex flex-col gap-10 md:w-[80%] mx-auto w-full">
          <div className='flex flex-col items-center w-full pt-40 pb-20 gap-5'>
              <h1 className="md:text-5xl text-2xl font-philosopher">SALON</h1>
              <p className="font-sans md:px-56 text-center text-[18px]">Everything we do at Moni Adeboye is motivated by our commitment to discovering and shaping the story you want to tell through your personal style.</p>
          </div>
      </GlobalContainer>
      <Image width={1000} height={1000} alt='image' className='w-full' src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1770254374/image_16_i0rlsl.png'} />
      <GlobalContainer className="grid md:grid-cols-2 grid-cols-1 gap-10 md:w-[80%] mx-auto w-full mb-20 pt-40 border-b border-gray-300">
          <div className='flex flex-col justify-between items-center w-full  gap-5'>
              <h1 className="md:text-5xl text-2xl font-philosopher">OUR MISSION</h1>
              <Image width={1000} height={1000} alt='image' className='w-40' src={'https://coiffure.vamtam.com/wp-content/uploads/2023/01/GettyImages-1317331156.svg'} />
              <p className="font-sans md:px-56 text-center text-[18px]"></p>
          </div>
          <p className='md:text-lg'>I believe makeup should enhance, not mask. Our mission is to deliver flawless, natural glam that celebrates individuality. With attention to detail, professionalism, and a client-first approach, I aim to help women see the best version of themselves — and step into every moment with confidence.

          </p>
      </GlobalContainer>
      <GlobalContainer className={'grid md:grid-cols-2 grid-cols-1'}>
        <Image width={1000} height={1000} alt='image' className='w-full' src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100536/Website_1_r76udd.jpg'} />
        <div className='flex flex-col gap-10 justify-center md:px-20'>
          <h2 className='md:text-5xl text-2xl font-philosopher'>Brand Story</h2>
          <p className='md:text-lg text-md'>My journey began with a passion for beauty. I started out self-taught, practicing on myself and friends, before going through professional training to refine my artistry. What began as something I loved has now grown into a career where I not only serve clients but also share my knowledge with others who want to learn makeup for personal or professional use.
</p>
          <button className='p-4 text-white bg-[#d0813c] hover:bg-[#392f2a]'>Book an appointment</button>
        </div>
      </GlobalContainer>
      <GlobalContainer className={'grid md:grid-cols-2 grid-cols-1 my-40 items-center'}>
        <h3 className='md:text-5xl text-3xl font-philosopher'>OUR FOCUS</h3>
        <p className='md:text-xl font-semibold'>My portfolio features a variety of work across bridal, editorial, casual glam, events, and film/TV. It reflects the versatility of my artistry as well as the skin-focused glam style that defines my brand. </p>
      </GlobalContainer>
      {/* <div className='relative flex flex-col gap-5'>
        <GlobalContainer className={'relative'}>
          <div className='bg-white md:p-5 flex flex-col gap-5'>
            <h4 className='md:text-3xl text-xl font-philosopher'>THE BEST HAIR SALON</h4>
            <div className='border-y border-gray-300 py-5'>
              <p className='md:text-lg'>Our teams' results speak for themselves. From the perfect cut to head-to-toe pampering, View the services we offer and book now.</p>
            </div>
          </div>
        </GlobalContainer>
      </div> */}
      {/* <Image width={1000} height={1000} alt='image' className='w-40' src={'https://coiffure.vamtam.com/wp-content/uploads/2023/03/pexels-alexander-krivitskiy-1027092-scaled.jpg'} /> */}
    </>
  )
}

export default page