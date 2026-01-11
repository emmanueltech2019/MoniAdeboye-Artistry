import React from 'react'
import aveda from '@/images/aveda.png'
import Image from 'next/image'

const Products = () => {
  return (
    <div className='grid md:grid-cols-2 my-20'>
        <div className="h-screen w-full relative flex justify-center items-center bg-[#f5eddc] py-20">
            <div className="w-1/2 bg-white p-5 flex flex-col justify-center gap-5">
                <Image src={aveda} width={1000} height={1000} alt='aveda' />
                <p>SCALP SOLUTIONS BALANCING SHAMPOO</p>
                <p className="text-sm">$28.00-$45.00</p>
            </div>
        </div>
        <div className="h-full w-full">
            <div className="flex h-full md:p-10 p-3 items-start flex-col md:gap-50 gap-10 justify-end">
                <p>.Shop</p>
                <div className="flex flex-col items-start gap-5">
                    <h6 className='md:text-6xl text-3xl'>PRODUCTS YOU'LL DEFINITELY USE EVERYDAY</h6>
                    <button className="bg-black text-white py-2 px-8">
                        View all products
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products