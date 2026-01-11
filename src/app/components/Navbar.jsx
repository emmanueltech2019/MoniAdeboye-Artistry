// "use client";
// import React, {useState} from 'react'
// import Image from 'next/image'
// import logo from '@/images/logo4.png'
// import background from '@/images/background.png'
// import Link from 'next/link'
// import AppointmentModal from './AppointmentModal'

// const Navbar = () => {
//       const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div className='p-8 md:p-2 py-3 border-b border-[#b0b0b0] w-full flex justify-between items-center fixed z-1 bg-white'>
//         <Image src={logo} width={1000} height={1000} alt='logo' className='md:w-50 w-30' />
//         <ul className='gap-5 items-center hidden md:flex'>
//           <li><Link href={''}>Home</Link></li>
//           <li><Link href={''}>About Us</Link></li>
//           <li><Link href={''}>Services</Link></li>
//           <li><Link href={''}>Gallery</Link></li>
//           <li><Link href={''}>Contact</Link></li>
//         </ul>
//         <div className="flex md:gap-10 items-center">
//           <p className='border-b text-10 pr-5 md:pr-0' onClick={() => setIsModalOpen(true)}>Book Your Session</p>
//           <div className="flex flex-col gap-2">
//             <div className="w-10 h-[2px] bg-black"></div>
//             <div className="w-10 h-[2px] bg-black"></div>
//           </div>
//         </div>
//         <AppointmentModal
//         isOpen={isModalOpen} 
//         onClose={() => setIsModalOpen(false)} 
//       />
//     </div>
//   )
// }

// export default Navbar
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/images/logo4.png';
import Link from 'next/link';
import AppointmentModal from './AppointmentModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className="p-8 md:px-12 py-6 border-b border-[#b0b0b0] w-full flex justify-between items-center fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-sm">
        <Image src={logo} width={220} height={40} alt="logo" className="w-auto h-10" />
        
        <ul className="gap-8 items-center hidden md:flex text-sm uppercase tracking-widest font-light">
          {navLinks.map((link) => (
            <li key={link.name}><Link href={link.href} className="hover:opacity-50 transition-opacity">{link.name}</Link></li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="border-b border-black text-xs uppercase tracking-tighter pb-1 hover:opacity-50 transition-all"
          >
            Book Now
          </button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-1.5 z-[60]"
          >
            <div className={`w-8 h-[1px] bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-8 h-[1px] bg-black ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-8 h-[1px] bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[55] transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-black/20" onClick={() => setIsMenuOpen(false)}></div>
        
        <div className="absolute right-0 top-0 h-full w-full md:w-[450px] bg-[#FDFBF7] shadow-2xl p-12 md:p-20 flex flex-col justify-center overflow-y-auto" style={{
            backgroundImage: `url(https://res.cloudinary.com/wise-solution-inc/image/upload/v1768129401/GettyImages-1370573477_kosmad.webp)`,
            backgroundAttachment: 'fixed', 
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
        }}>
          
          <div className="md:hidden flex flex-col gap-8 mb-12 bg-black">
             {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-2xl font-serif uppercase tracking-widest border-b border-gray-100 pb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
             ))}
          </div>

          <div className="space-y-12 text-left">
            <section>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6">Contacts</h4>
              <Link href="tel:09076516441" className="hover:underline">09076516441 </Link>
              <Link href="mailto:monisolaadeboye@gmail.com" className="hover:underline">monisolaadeboye@gmail.com</Link>

            </section>

            <section>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6">Hours</h4>
              <div className="text-sm space-y-1 font-light">
                <p>Mon to Fri: 7:30 am — 1:00 am</p>
                <p>Sat: 9:00 am — 1:00 am</p>
                <p>Sun: 9:00 am — 11:30 pm</p>
              </div>
            </section>

            <section>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6">Location</h4>
              <p className="text-sm font-light leading-relaxed">
                In the heart of Lagos:<br />
               <p>off university road, Yaba, Lagos.</p>
              </p>
            </section>

            <button 
              onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }}
              className="bg-[#1A1A1A] text-white px-8 py-4 text-[10px] uppercase tracking-[0.2em] w-full md:w-auto"
            >
              Book an appointment
            </button>
          </div>
        </div>
      </div>

      <AppointmentModal
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;