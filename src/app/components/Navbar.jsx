import React from 'react'
import Image from 'next/image'
import logo from '@/images/logo.svg'
import background from '@/images/background.png'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='p-8 border-b border-[#b0b0b0] w-full flex justify-between items-center fixed z-1'>
        <Image src={logo} width={1000} height={1000} alt='logo' className='w-25' />
        <ul className='flex gap-5 items-center'>
          <li><Link href={''}>H.</Link></li>
          <li><Link href={''}>Salon</Link></li>
          <li><Link href={''}>Services</Link></li>
          <li><Link href={''}>Gallery</Link></li>
          <li><Link href={''}>Shop</Link></li>
        </ul>
        <div className="flex gap-10 items-center">
          <Link href={''} className='border-b'>Book Now</Link>
          <div className="flex flex-col gap-2">
            <div className="w-10 h-[2px] bg-black"></div>
            <div className="w-10 h-[2px] bg-black"></div>
          </div>
        </div>
    </div>
  )
}

export default Navbar