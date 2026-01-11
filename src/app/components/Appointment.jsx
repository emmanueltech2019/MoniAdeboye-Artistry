import React from 'react'
import GlobalContainer from './GlobalContainer'
import { ArrowRight } from 'lucide-react'

const Appointment = () => {
  return (
    <GlobalContainer className={'pt-20 flex flex-col gap-10'}>
        <div className="flex justify-center items-center gap-10">
            <h6 className="text-5xl">BOOK AN APPOINTMENT</h6>
            <div className="w-15 h-15 p-3 bg-black flex justify-center items-center rounded-full">
                <ArrowRight strokeWidth={1} className='rotate-40' size={60} color='white' />
            </div>
        </div>
        <div className="flex justify-between w-full items-center">
            <p className='w-1/2 text-2xl'>BECOME PART OF OUR BEAUTY COMMUNITY WITH EXCLUSIVE ACCESS TO SPECIAL OFFERS AND LATEST NEWS</p>
            <div className="flex gap-2 w-full justify-end">
                <input type="email" className='hover:border hover:border-black outline-none border border-[#d8d6d0] w-1/2' />
                <button className='bg-black text-white py-2 px-10'>Subscribe</button>
            </div>
        </div>
    </GlobalContainer>
  )
}

export default Appointment