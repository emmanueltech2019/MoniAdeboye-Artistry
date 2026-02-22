import Image from 'next/image'
import React from 'react'
import GlobalContainer from '../components/GlobalContainer'

const page = () => {
  return (
    <>
      <GlobalContainer className="flex flex-col gap-10 md:w-[80%] mx-auto w-full">
          <div className='flex flex-col items-center w-full pt-40 pb-20 gap-5'>
              <h1 className="md:text-5xl text-2xl font-philosopher">SALON</h1>
              <p className="font-sans md:px-56 text-center text-[18px]">Over here, beauty is approached as identity architecture- carefully refined, thoughtfully executed, and designed to communicate who you are before you speak.</p>
          </div>
      </GlobalContainer>
      <GlobalContainer className="grid md:grid-cols-2 grid-cols-1 gap-10 md:w-[80%] mx-auto w-full mb-20 pt-40 border-b border-gray-300">
          <div className='flex flex-col justify-between items-center w-full  gap-5'>
              <h1 className="md:text-5xl text-2xl font-philosopher">OUR MISSION</h1>
              <Image width={1000} height={1000} alt='image' className='w-40' src={'https://coiffure.vamtam.com/wp-content/uploads/2023/01/GettyImages-1317331156.svg'} />
              <p className="font-sans md:px-56 text-center text-[18px]"></p>
          </div>
          <p className='md:text-lg'>
            To craft elevated, intentional beauty experiences that help women present themselves with clarity, confidence, and quiet distinction. <br /> <br />
            We are committed to precision, refinement, and excellence at every stage, from consultation to final reveal; ensuring each client leaves not just looking transformed, but aligned.
          </p>
      </GlobalContainer>
      <GlobalContainer className={'grid md:grid-cols-2 grid-cols-1'}>
        <Image width={1000} height={1000} alt='image' className='w-full' src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100536/Website_1_r76udd.jpg'} />
        <div className='flex flex-col gap-10 justify-center md:px-20'>
          <h2 className='md:text-5xl text-2xl font-philosopher'>Brand Story</h2>
          <p className='md:text-lg text-md'>Moni Adeboye was built on the belief that makeup is more than enhancement, it is positioning. <br /> <br /> What began as a passion for artistry evolved into a disciplined pursuit of mastery in soft, defined glam. Over time, our approach became less about trends and more about timeless refinement. Each face became a canvas for balance, structure, and subtle impact. <br /> <br /> Today, the brand serves women who understand that presence matters; brides, celebrants, professionals, and visionaries who want their beauty to feel polished yet effortless.</p>
          <button className='p-4 text-white bg-[#d0813c] hover:bg-[#392f2a]'>Book an appointment</button>
        </div>
      </GlobalContainer>
      <GlobalContainer className={'grid md:grid-cols-2 grid-cols-1 my-40 items-center'}>
        <h3 className='md:text-5xl text-3xl font-philosopher'>OUR FOCUS</h3>
        <p className='md:text-lg text-md'>Refined Soft Glam: Flawless complexion, structured definition, seamless blending. <br /> <br /> Intentional Client Experience: Calm, organized, and detail-oriented from booking to delivery. <br /> <br /> Personalized Execution: Every look is tailored to skin tone, face structure, wardrobe, and occasion. <br /> <br /> Elevated Presentation: Beauty that photographs impeccably and translates beautifully in person.</p>
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