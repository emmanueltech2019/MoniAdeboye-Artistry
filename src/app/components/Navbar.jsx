import React from 'react'
import Image from 'next/image'
import logo from '@/images/logo4.png'
import background from '@/images/background.png'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='p-8 md:p-2 py-3 border-b border-[#b0b0b0] w-full flex justify-between items-center fixed z-1 bg-white'>
        <Image src={logo} width={1000} height={1000} alt='logo' className='md:w-50 w-30' />
        <ul className='gap-5 items-center hidden md:flex'>
          <li><Link href={''}>Home</Link></li>
          <li><Link href={''}>About Us</Link></li>
          <li><Link href={''}>Services</Link></li>
          <li><Link href={''}>Gallery</Link></li>
          <li><Link href={''}>Contact</Link></li>
        </ul>
        <div className="flex md:gap-10 items-center">
          <Link href={''} className='border-b text-10 pr-5 md:pr-0'>Book Your Session</Link>
          <div className="flex flex-col gap-2">
            <div className="w-10 h-[2px] bg-black"></div>
            <div className="w-10 h-[2px] bg-black"></div>
          </div>
        </div>
    </div>
  )
}

export default Navbar