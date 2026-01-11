import React from 'react'
import GlobalContainer from './GlobalContainer'
import Image from 'next/image'
import beauty from '@/images/three.jpg'
import nails from '@/images/six.jpg'
import hair from '@/images/four.jpg'
import Link from 'next/link'

const Beauty = () => {
  return (
    <GlobalContainer className={'py-30 relative'}>
        <h2 className='md:text-7xl text-4xl mb-10'>WE'VE GOT YOUR BEAUTY <br /> NEEDS COVERED</h2>
        <div className="grid md:grid-cols-[3fr_9fr] border-t border-[#d8d6d0] py-5">
            <p className='pb-5'>. Our Services</p>
            <div className="flex flex-col gap-10">
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="flex flex-col gap-3">
                        <Image src={hair} width={1000} height={1000} alt='hair' className='' />
                        <span className="text-xl">HAIR AND HAIRCUTS</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Image src={beauty} width={1000} height={1000} alt='beauty' className='' />
                        <span className="text-xl">BEAUTY</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Image src={nails} width={1000} height={1000} alt='hair' className='' />
                        <span className="text-xl">NAILS</span>
                    </div>
                </div>
                <div className="border-y py-5 border-[#d8d6d0]">
                    <div className="flex flex-col gap-10">
                        <div className="grid grid-cols-4">
                            <span>Haircut / Blow Dry</span>
                            <span>$30</span>
                            <span>Ombre/Balayage</span>
                            <span>$30</span>
                        </div>
                        <div className="grid grid-cols-4">
                            <span>Ombre/Balayage</span>
                            <span>$30</span>
                            <span>Full Highlight + Root</span>
                            <span>$130</span>
                        </div>
                        <div className="grid grid-cols-4 ">
                            <span>Color Change</span>
                            <span>$70</span>
                            <span>Haircolor Half Highlight</span>
                            <span>$120</span>
                        </div>
                    </div>
                </div>
                <Link href={''}>View all services & pricing</Link>
            </div>
        </div>
    </GlobalContainer>
  )
}

export default Beauty