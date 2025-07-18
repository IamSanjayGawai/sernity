
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import butterflypng from '/butterfly-removebg-preview.png'
import sammedDevelopers from '/sammed-dev-removebg-preview.png'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const butterflyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        heroRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    // Floating butterfly animation
    const animateButterfly = () => {
      if (butterflyRef.current) {
        const butterfly = butterflyRef.current;
        butterfly.style.transform = `translateY(${Math.sin(Date.now() * 0.002) * 20}px) translateX(${Math.cos(Date.now() * 0.001) * 10}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    const animationInterval = setInterval(animateButterfly, 50);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <section id="home" className="w-full  relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-200 via-white to-teal-500">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-200/100 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-200/100 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-green-200/100 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
      </div>

      {/* Floating Butterfly */}
      <div ref={butterflyRef} className="absolute top-3/4 left-1/4 text-6xl animate-bounce " style={{ animationDuration: '5s' }}>
        {/* 🦋 */}
                  <img src={sammedDevelopers}/>
      </div>

      <div ref={heroRef} className="text-center z-10 px-4  w-full">
        <div className="mb-8 animate-fade-in flex justify-around items-center ">

            <div className='hidden sm:block'>
                
          <h1 className="text-6xl md:text-8xl font-bold text-teal-600 mb-4 animate-scale-in">
            SERENITY
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-6 animate-slide-in-right"></div>
          <p className="text-xl md:text-2xl text-gray-600 mb-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Rise Above | Live Beyond
          </p>
          <p className="text-lg text-gray-500 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            A New Chapter Begins
          </p>
          </div>
      



          {/* <div className='flex flex-col'>
          <span>SAMMED</span>
          <span>DEVELOPERS</span>
          </div> */}
         
          <img src={butterflypng} className=' w-[600px] ' />
        </div>

        {/* <div className="space-y-4 animate-fade-in" style={{ animationDelay: '1s' }}>
          <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
            Explore Serenity
          </button>
          <div className="flex justify-center space-x-4 text-sm text-gray-600">
            <span className="bg-white/80 px-4 py-2 rounded-full shadow-md hover:scale-105 transform transition-all">Premium Residences</span>
            <span className="bg-white/80 px-4 py-2 rounded-full shadow-md hover:scale-105 transform transition-all">Modern Living</span>
          </div>
        </div> */}

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-teal-500" size={32} />
        </div>
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-teal-50/20 to-blue-50/30 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
