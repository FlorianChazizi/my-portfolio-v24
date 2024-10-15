'use client';
import { useEffect } from 'react';
import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations (in milliseconds)
      once: true, // Animation happens only once when scrolling
    });
  }, []);
  return (
<section className="bg-navy text-white h-screen flex flex-col justify-center items-center">
  <div className="text-center px-4 sm:px-6 lg:px-8">
    <h1 className="text-5xl font-bold mb-4" data-aos="fade-down">
      Hi, I&apos;m Florian Chazizi 👋
    </h1>
    <p className="text-xl mb-6" data-aos="fade-up">
      Frontend Developer by day, <span className='text-yellow'>JavaScript</span> debugger by night. 💻 
      I turn coffee into <span className="text-yellow">beautiful websites</span> and 
      sometimes, just sometimes, things even work on <span className="text-yellow">Internet Explorer</span>.
    </p>
    <p className="text-lg mb-6"data-aos="fade-up">
      I write code that makes your website look good on all screens... unless it&apos;s a potato. 🥔
    </p>
    <div className="flex justify-center space-x-4" data-aos="fade-up">
      <a href="#projects" className="bg-yellow text-navy px-6 py-3 rounded-lg font-semibold hover:bg-lightblue hover:text-yellow transition">
        See My Work
      </a>
      <a href="#contact" className="border border-yellow text-yellow px-6 py-3 rounded-lg font-semibold hover:bg-yellow hover:text-navy transition">
        Let&apos;s Chat!
      </a>
    </div>
  </div>
</section>


  )
}

export default Hero