import React, { useState, useEffect } from "react";
import proPic6 from "../assets/Slide/slide1.jpg";
import proPic7 from "../assets/Slide/slide2.jpg";
import proPic3 from "../assets/Slide/slide3.jpg";
import proPic4 from "../assets/Slide/slide4.jpg";
import proPic5 from "../assets/Slide/slide5.jpg";
import proPic1 from "../assets/Slide/Brochure1.png";
import proPic2 from "../assets/Slide/Brochure2.png";

const Hero = () => {
  const images = [proPic1, proPic2, proPic3, proPic4, proPic5, proPic6, proPic7]; // Array for the slider
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image Slider */}
      <div
        className=" object-cover w-full h-full bg-center bg-cover transition-all duration-1000 ease-in-out"
        style={{ 
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Full-width and full-height text overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="text-center text-white">
            <h1 className="text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">KVM Electronics Services</h1>
            <p className="text-2xl">Transforming Industries with Cutting-Edge Automation</p>
          </div>
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
