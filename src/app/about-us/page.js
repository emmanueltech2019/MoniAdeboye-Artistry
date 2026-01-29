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
      <Image width={1000} height={1000} alt='image' className='w-full' src={'https://coiffure.vamtam.com/wp-content/uploads/2023/02/benyamin-bohlouli-dDhWJLXEZ5I-unsplash-scaled.jpg'} />
      <GlobalContainer className="grid md:grid-cols-2 grid-cols-1 gap-10 md:w-[80%] mx-auto w-full mb-20 pt-40 border-b border-gray-300">
          <div className='flex flex-col justify-between items-center w-full  gap-5'>
              <h1 className="md:text-5xl text-2xl font-philosopher">THE BEGINING</h1>
              <Image width={1000} height={1000} alt='image' className='w-40' src={'https://coiffure.vamtam.com/wp-content/uploads/2023/01/GettyImages-1317331156.svg'} />
              <p className="font-sans md:px-56 text-center text-[18px]"></p>
          </div>
          <p className='md:text-lg'>Their vision first came to life in the vibrant Manhattan district in 2004, where the two owners had a art gallery and hair salon space so they could experiment freely and hone their craft. <br /> <br />
          The first Moni Adeboye had no sign, website, email, or business cards: John and Jen attracted clients by word-of-mouth. They earned a reputation for their unique, hyper-personalized haircuts.
          </p>
      </GlobalContainer>
      <GlobalContainer className={'grid md:grid-cols-2 grid-cols-1'}>
        <Image width={1000} height={1000} alt='image' className='w-full' src={'https://coiffure.vamtam.com/wp-content/uploads/2023/02/pexels-cottonbro-studio-7440131.jpg'} />
        <div className='flex flex-col gap-10 justify-center md:px-20'>
          <h2 className='md:text-5xl text-2xl font-philosopher'>OUR APPROACH</h2>
          <p className='md:text-lg text-md'>At Moni Adeboye, we are in love with our craft and are passionate about using it to express individuality. We believe we all have something about us that is unique and worthy of being seen.</p>
          <p className='md:text-lg text-md'>Everything we do at Moni Adeboye is motivated by our commitment to discovering and shaping the story you want to tell through your personal style.</p>
          <button className='p-4 bg-black text-white'>Book an appointment</button>
        </div>
      </GlobalContainer>
      <GlobalContainer className={'grid md:grid-cols-2 grid-cols-1 my-40 items-center'}>
        <h3 className='md:text-5xl text-3xl font-philosopher'>OUR FOCUS</h3>
        <p className='md:text-xl font-semibold'>Our top priority is making you feel bautiful for who you are: Neurodiverse and non-binary clients of all ages, genders, ethnicities, and backgrounds are celebrated here. We want to frame your best features, not fit you in to a box.</p>
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