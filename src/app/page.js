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

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Beauty />
      <Beautiful />
      <Guarantee />
      <Team />
      <BeYourBest />
      <Products />
      <WhatYouShouldKnow />
      <Creative />
      <FlexImages />
      <Appointment />
    </div>
  );
}
