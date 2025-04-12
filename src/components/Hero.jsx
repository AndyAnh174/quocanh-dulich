import React, { useState, useEffect } from 'react';
import banner from '../assets/banner/5.png';
import bannerMobile from '../assets/banner/4.png'; // Banner dành riêng cho mobile

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative">
      <div className="hero-image w-full h-[300px] md:h-[400px] overflow-hidden">
        {/* Banner cho desktop */}
        <img 
          src={banner} 
          alt="Thủ Đức Skyline" 
          className="hidden md:block w-full h-full object-cover"
        />
        
        {/* Banner cho mobile */}
        <img 
          src={bannerMobile} 
          alt="Thủ Đức Skyline" 
          className="block md:hidden w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 flex justify-center items-center z-100">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-wider text-center px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
            THỦ ĐỨC UNLOCKED
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
