import React from "react";
import Hero from "../component/HeroHome/Hero";
import AboutUs from "../component/AboutUs/AboutUs";
import Services from "../component/Services/Services";
import Events from "../component/Events/Events";
import Contact from "../component/Contact/Contact";
import Footer from "../component/Footer/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutUs />
      <Services />
      <Events/>
      <Contact />
    </div>
  );
}
