import React from 'react'
import GlobalContainer from './GlobalContainer'

const Footer = () => {
  return (
    <GlobalContainer className='flex flex-col gap-50 py-20 border-t border-[#d8d6d0]'>
        <div className="grid md:grid-cols-3 gap-5">
            <div className="flex flex-col md:gap-10 gap-5">
                <span className="md:text-3xl text-xl">CONTACTS</span>
                <div className="flex flex-col gap-2">
                    <p>+1800_356_8933</p>
                    <p>example@gmail.com</p>
                </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-5">
                <span className="md:text-3xl text-xl">LOCATION</span>
                <div className="flex flex-col gap-2">
                    <p>758 5th Avenue</p>
                    <p>In the heart of NYC</p>
                </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-5">
                <span className="md:text-3xl text-xl">SOCIAL</span>
                <div className="flex flex-col gap-2">
                    <p>Instagram Facebook</p>
                </div>
            </div>
        </div>
        <p className="text-sm">&copy; 2026 VAMTAM. ALL RIGHT RESERVED. TERMS PRIVACY</p>
    </GlobalContainer>
  )
}

export default Footer