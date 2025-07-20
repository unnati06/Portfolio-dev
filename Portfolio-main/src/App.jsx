import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import HeroSection from "./components/HeroSection";
import Blogs from "./sections/Blogs";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <HeroSection />
      {/* <Hero /> */}
      <About />
      <Projects />
      <Experiences />
      {/* <Testimonial /> */}
      <Blogs/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
