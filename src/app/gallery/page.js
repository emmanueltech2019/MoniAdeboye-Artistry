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
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://coiffure.vamtam.com/wp-content/uploads/2023/02/autri-taheri-_PYj9cbIpIw-unsplash-1.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://coiffure.vamtam.com/wp-content/uploads/2023/02/alexander-grey-ORCPTrkkezw-unsplash.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://coiffure.vamtam.com/wp-content/uploads/2023/02/jessie-dee-dabrowski-www-jessiedee-net-W6cwaL7PMSw-unsplash-1.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://coiffure.vamtam.com/wp-content/uploads/2023/02/kareya-saleh-tLKOj6cNwe0-unsplash-1.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://coiffure.vamtam.com/wp-content/uploads/2023/02/pexels-cottonbro-studio-7440131-1.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://coiffure.vamtam.com/wp-content/uploads/2023/02/pexels-chloe-1321916.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://coiffure.vamtam.com/wp-content/uploads/2023/02/pexels-element-digital-973403-1.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://coiffure.vamtam.com/wp-content/uploads/2023/02/pexels-neosiam-1084719-1.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://coiffure.vamtam.com/wp-content/uploads/2023/02/pexels-engin-akyurt-3065207.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://coiffure.vamtam.com/wp-content/uploads/2023/02/pexels-koolshooters-7142792-1-1.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://coiffure.vamtam.com/wp-content/uploads/2023/02/valeriia-kogan-CIrRI0ujiRo-unsplash-1-1.jpg'} />
                <Image className="break-inside-avoid" width={1000} height={1000} alt="image" src={'https://coiffure.vamtam.com/wp-content/uploads/2023/02/pexels-maria-lindsey-content-creator-1536356.jpg'} />
            </div>
      </GlobalContainer>
      <Appointment />
    </>
  );
}
