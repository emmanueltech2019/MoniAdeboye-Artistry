'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Beauty from "./components/Beauty";
import Beautiful from "./components/Beautiful";
import Guarantee from "./components/Guarantee";
import Team from "./components/Team";
import BeYourBest from "./components/BeYourBest";
import Products from "./components/Products";
import WhatYouShouldKnow from "./components/WhatYouShouldKnow";
import Creative from "./components/Creative";
import FlexImages from "./components/FlexImages";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";
import BookingWidget from "./components/BookingWidget";
import logo from '@/images/Monisola.png';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import GlobalContainer from "./components/GlobalContainer";
import { SplitText } from "gsap/all";
gsap.registerPlugin(SplitText);

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline({defaults: {duration: 2, ease: 'power2.out'}})
    const splitTextChar = new SplitText('.splitTextChar', {type: 'chars'});
    const splitTextWord = new SplitText('.splitTextWord', {type: 'words'});
    const splitTextWordParagraph = new SplitText('.opacity-paragraph', {type: 'words'});
    tl.to('.animate-opacity', {
      opacity: 1, 
    }).to('.animate-opacity', {
      x: -50
    }, "<").from('.clip', {
      x: -200,
    }, "<1").to('.clip', {
      x: -110,
      clipPath: 'inset(0 0 0% 0)',
    }, "<").to('.animate-opacity', {
      x: 20,
    }, "<1").to('.animate-opacity', {
      opacity: 0,
    }, "<").to(".clip", {
      opacity: 0.5,
      borderRadius: '50%',
    }).to('.clip', {
      scale: 5,
    }, "<1").to(".fadeBackground", {
      opacity: 0,
      zIndex: -1
    }, "<1").from(splitTextChar.chars, {
      y: 100,
      duration: 0.2,
      stagger: {
        each: 0.05, 
        ease: "power2.inOut"
      }
    }).from(splitTextWord.words, {
      y: 200, 
      stagger: 0.08, 
      duration: 0.5,
    }).from(splitTextWordParagraph.words, {
      opacity: 0, 
      stagger: 0.02, 
      duration: 0.3,
    }).from('.top-translate', {
      y: -150,
    })
    gsap.timeline({
      scrollTrigger: {
        trigger: '.trigger-this'
      }
    })
  })
  return (
    <div>
      <div className="fixed w-screen h-screen bg-white z-60 top-0 flex justify-center items-center fadeBackground">
        <Image src={logo} alt="Moni Adeboye Artistry Logo" width={1000} height={1000} className="w-50 flex-shrink-0 animate-opacity opacity-0" />
        <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100530/Web_9_qyvboq.jpg"} alt="Moni Adeboye Artistry Logo" width={1000} height={1000} className="w-50 flex-shrink-0 clip" />
      </div>
      <div>
        <Navbar className={'top-translate'} />
        <div className="h-screen w-full relative trigger-this">
            <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100530/Web_9_qyvboq.jpg"} width={1000} height={1000} alt='background' className='w-full h-full absolute opacity-50 top-0 left-0 object-cover' />
            <GlobalContainer className={'w-full h-full flex flex-col md:gap-0 gap-3 relative justify-end py-10'}>
                <h1 className='md:text-7xl md:text-5xl text-3xl uppercase splitTextChar overflow-hidden font-semibold'>Moni Adeboye Artistry</h1>
                <span className='md:text-7xl text-4xl splitTextWord overflow-hidden'>WHERE ARTISTRY. <br /> MEETS ELEGANCE.</span>
                <p className='md:pe-200 opacity-paragraph'>Moni Adeboye Artistry is a skin-focused makeup studio dedicated to creating clean, seamless looks that enhance natural beauty. Every experience is thoughtfully tailored, delivering refined, confidence-boosting results for every occasion.</p>
            </GlobalContainer>
        </div>
        <Beauty />
        <Beautiful />
        <Guarantee />
        {/* <Team /> */}
        <BeYourBest />
        {/* <Products /> */}
        <WhatYouShouldKnow />
        <Creative />
        <FlexImages />
        <Appointment />
        <Footer />
        <BookingWidget/>
      </div>
    </div>
  );
}
