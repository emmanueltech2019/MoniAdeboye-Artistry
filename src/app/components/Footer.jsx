import React from 'react'
import GlobalContainer from './GlobalContainer'
import Link from 'next/link'

const Footer = () => {
  return (
    <GlobalContainer className='flex flex-col gap-50 py-20 border-t border-[#d8d6d0]'>
        <div className="grid md:grid-cols-3 gap-5">
            <div className="flex flex-col md:gap-10 gap-5">
                <span className="md:text-3xl text-xl">CONTACTS</span>
                <div className="flex flex-col gap-2">
                    <Link href="tel:09076516441" className="hover:underline">09076516441 </Link>
                    <Link href="mailto:monisolaadeboye@gmail.com" className="hover:underline">monisolaadeboye@gmail.com</Link>
                </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-5">
                <span className="md:text-3xl text-xl">LOCATION</span>
                <div className="flex flex-col gap-2">
                    {/* <p>758 5th Avenue</p> */}
                    <p>off university road, Yaba, Lagos.</p>
                </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-5">
                <span className="md:text-3xl text-xl">SOCIAL</span>
                <div className="flex flex-col gap-2">
                    <p><Link href="https://www.instagram.com/moniadeboye_mua/">Instagram</Link> <br/>
                    <Link href="https://web.facebook.com/profile.php?id=100067548947007">Facebook</Link></p>
                </div>
            </div>
        </div>
        <p className="text-sm">&copy; 2026 <Link href="https://devemmy.com">devemmy.com</Link>. ALL RIGHT RESERVED. TERMS PRIVACY</p>
    </GlobalContainer>
  )
}

export default Footer