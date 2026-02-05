'use client'
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingWidget from "../components/BookingWidget";
import logo from '@/images/Monisola.png';
import gsap from "gsap";
import GlobalContainer from "../components/GlobalContainer";
import { SplitText } from "gsap/all";
import Appointment from "../components/Appointment";
gsap.registerPlugin(SplitText);


export default function page() {

  return (
    <>
      <GlobalContainer className="flex flex-col gap-10 md:w-[80%] mx-auto w-full">
            <div className='flex flex-col items-center w-full pt-40 pb-20 gap-5'>
                <h1 className="md:text-5xl text-2xl font-philosopher">GALLERY</h1>
                <p className="font-sans md:px-56 text-center text-[18px]">Take a look at just a few brand new looks we've created for our happy clients</p>
            </div>
            <div className="columns-2 md:columns-3 items-start space-y-5">
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1768103805/560661079_18238893982295532_250446624367988961_n_fdgc7p.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://res.cloudinary.com/wise-solution-inc/video/upload/v1768100541/Web_9_pkwgpn.mov'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100539/Web_12_gmfwip.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100538/Web_dt7dyn.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100536/Website_1_r76udd.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100537/Web_5_zilckz.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100535/Web_11_xiu5it.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100530/Web_vratey.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100530/Web_9_qyvboq.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100530/Web_8_wofgam.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100530/Web_8_wofgam.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100529/Web_4_i24pnq.jpg'} />
            </div>
      </GlobalContainer>
      <Appointment />
    </>
  );
}
