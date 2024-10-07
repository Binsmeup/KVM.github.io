import React, { useState, useEffect, useCallback, useMemo } from "react";
import proPic6 from "../assets/Slide/slide1.jpg";
import proPic7 from "../assets/Slide/slide2.jpg";
import proPic3 from "../assets/Slide/slide3.jpg";
import proPic4 from "../assets/Slide/slide4.jpg";
import proPic5 from "../assets/Slide/slide5.jpg";
import proPic8 from "../assets/Slide/slide6.jpg";
import proPic9 from "../assets/Slide/slide7.jpg";
import proPic1 from "../assets/Slide/Brochure1.png";
import proPic2 from "../assets/Slide/Brochure2.png";
import logo from "../assets/Logo.png";


const Hero = () => {
  const images = useMemo(() => [proPic1, proPic2, proPic3, proPic4, proPic5, proPic6, proPic7, proPic8, proPic9], []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80">
        <div className="text-center text-white">
          <div className="flex flex-col items-center justify-center sm:flex-row">
            <img className="w-16 h-16 mb-4 sm:w-24 sm:h-24 sm:mb-0 sm:mr-4" src={logo} alt="logo" />
            <h1 className="text-4xl font-bold tracking-tight text-center sm:text-left lg:text-6xl xl:text-8xl">KVM Electronics Services</h1>
          </div>
          <p className="text-2xl mt-4">Your Partner For Machine Automation</p>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
