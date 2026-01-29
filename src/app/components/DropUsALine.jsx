import { Dot } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import GlobalContainer from './GlobalContainer'

const DropUsALine = () => {
  return (
    <div className='my-20 flex flex-col gap-20'>
        <Image className='w-full md:h-130 h-50 object-cover' width={1000} height={1000} alt='imge' src={'https://coiffure.vamtam.com/wp-content/uploads/2023/02/adam-winger-3nBzt3Jdeh4-unsplash-scaled.jpg'} />
        <p className='text-center text-xl'>Drop us a line </p>
        <GlobalContainer className="flex flex-col md:gap-10 gap-5 md:w-[70%] mx-auto w-full">
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-1">
                    <p className="md:text-xl text-lg font-philosopher">SAY HI</p>
                    <Dot />
                </div>
                <h3 className='md:text-5xl text-3xl font-philosopher'>WE WOULD LOVE TO HEAR FROM YOU!</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
                <div className="flex flex-col w-full gap-3">
                    <p className='text-sm'>Your name</p>
                    <input type="text" className='border border-gray-300 p-4 bg-white placeholder:text-black outline-none' placeholder='Enter your name' />
                </div>
                <div className="flex flex-col w-full gap-3">
                    <p className='text-sm'>Phone number</p>
                    <input type="tel" className='border border-gray-300 p-4 bg-white placeholder:text-black outline-none' placeholder='Enter your phone' />
                </div>
                <div className="flex flex-col w-full gap-3">
                    <p className='text-sm'>Email address</p>
                    <input type="text" className='border border-gray-300 p-4 bg-white placeholder:text-black outline-none' placeholder='Email address' />
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-sm">Message</p>
                <textarea name="" id="" className='border border-gray-300 p-4 bg-white placeholder:text-black outline-none' placeholder='Type here'></textarea>
            </div>
            <button type="submit" className='bg-black text-white p-5 me-auto'>Send</button>
        </GlobalContainer>
    </div>
  )
}

export default DropUsALine