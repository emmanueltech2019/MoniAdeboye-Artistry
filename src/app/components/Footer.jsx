// import React from 'react'
// import GlobalContainer from './GlobalContainer'
// import Link from 'next/link'
// import Image from 'next/image'

// const Footer = () => {
//   return (
//     <GlobalContainer className='flex flex-col gap-50 py-20 border-t border-[#d8d6d0]'>
//         <div className="grid md:grid-cols-3 gap-5 hidden">
//             <div className="flex flex-col md:gap-10 gap-5">
//                 <span className="md:text-3xl text-xl">CONTACTS</span>
//                 <div className="flex flex-col gap-2">
//                     <Link href="tel:09076516441" className="hover:underline">09076516441 </Link>
//                     <Link href="mailto:monisolaadeboye@gmail.com" className="hover:underline">monisolaadeboye@gmail.com</Link>
//                 </div>
//             </div>
//             <div className="flex flex-col md:gap-10 gap-5">
//                 <span className="md:text-3xl text-xl">LOCATION</span>
//                 <div className="flex flex-col gap-2">
//                     {/* <p>758 5th Avenue</p> */}
//                     <p>Yaba, Lagos.</p>
//                 </div>
//             </div>
//             <div className="flex flex-col md:gap-10 gap-5">
//                 <span className="md:text-3xl text-xl">SOCIAL</span>
//                 <div className="flex flex-col gap-2">
//                         <Link href="https://www.instagram.com/moniadeboye_mua/">
//                         <Image src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1770110350/10464230_izzveq.png'} alt={"instagram icon"}/>
//                         </Link>
//                     {/* <Link href="https://www.linkedin.com/in/moniadeboye-mua/"><Image src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1770110349/10464230_yzvlnh.png'} alt={"linkedin icon"}/></Link> */}
//                     <Link href="https://www.tiktok.com/@moniadeboye_mua"><Image src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1770110403/Instagram_Glyph_Gradient_finqx6.png'} alt={"tiktok icon"}/></Link>
//                     <Link href="https://web.facebook.com/profile.php?id=100067548947007"><Image src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1770110350/10464230_izzveq.png'} alt={"tiktok icon"}/></Link> </Link>
//                 </div>
//             </div>
//         </div>
//         <p className="text-sm">&copy; 2026 <Link href="https://devemmy.com">devemmy.com</Link>. ALL RIGHT RESERVED. TERMS PRIVACY</p>
//     </GlobalContainer>
//   )
// }

// export default Footer

import React from 'react'
import GlobalContainer from './GlobalContainer'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <GlobalContainer className='flex flex-col md:gap-32 gap-20 py-5 border-t border-[#d8d6d0] bg-[#FAF9F6]'>
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-3 gap-12">
            
            {/* Contacts */}
            <div className="flex flex-col gap-6">
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-medium">Contacts</span>
                <div className="flex flex-col gap-3 text-neutral-700">
                    <Link href="tel:09076516441" className="hover:text-neutral-950 transition-colors">09076516441</Link>
                    <Link href="mailto:monisolaadeboye@gmail.com" className="hover:text-neutral-950 transition-colors break-words">monisolaadeboye@gmail.com</Link>
                </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-6">
                <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#d0813c]">Location</span>
                <div className="flex flex-col gap-3 text-neutral-700">
                    <p>Yaba, Lagos.</p>
                </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-6">
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-medium">Social</span>
                <div className="flex gap-5 items-center">
                    <Link href="https://www.instagram.com/moniadeboye_mua/" target="_blank" className="opacity-70 hover:opacity-100 transition-opacity">
                        <Image src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1770110403/Instagram_Glyph_Gradient_finqx6.png'} alt="Instagram" width={30} height={30} />
                    </Link>
                    <Link href="https://www.tiktok.com/@moniadeboye_mua" target="_blank" className="opacity-70 hover:opacity-100 transition-opacity">
                        <Image src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1770110350/10464230_izzveq.png'} alt="TikTok" width={50} height={50} />
                    </Link>
                    {/* <Link href="https://web.facebook.com/profile.php?id=100067548947007" target="_blank" className="opacity-70 hover:opacity-100 transition-opacity">
                        <Image src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1770110350/10464230_izzveq.png'} alt="Facebook" width={20} height={20} />
                    </Link> */}
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-5 border-t border-[#d8d6d0]/50">
            <p className="text-[10px] uppercase tracking-widest text-neutral-400">
                &copy; 2026 Moni Adeboye Artistry. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-[10px] uppercase tracking-widest text-neutral-400">
                <Link href="#" className="hover:text-neutral-800">Terms</Link>
                <Link href="#" className="hover:text-neutral-800">Privacy</Link>
                <Link href="https://devemmy.com" target="_blank" className="hover:text-neutral-800">Built by devemmy</Link>
            </div>
        </div>
    </GlobalContainer>
  )
}

export default Footer