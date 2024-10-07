import React, { useState, useEffect } from 'react';
import { SERVICES } from "../constants";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div id="services" className="custom-inset-shadow py-20 bg-gradient-to-b from-red-900 via-red-800 to-black">
      <motion.h1 
        whileInView={{opacity: 1, y: 0 }}
        initial={{opacity: 0, y: -100 }}
        transition={{duration: 0.5 }}     
        className="mb-10 text-center text-6xl font-bold text-red-100" >
        SERVICES OFFERED
      </motion.h1>
      <motion.div
        whileInView={{opacity: 1, width: "100px" }}
        initial={{opacity: 0, width: 0 }}
        transition={{duration: 0.5, delay: 0.2 }}
        className="mx-auto h-1 bg-red-300 mb-16"
      />
      <div className="container mx-auto px-4">
        {SERVICES.map((service, index) => (
          <motion.div
            key={index}
            whileInView={{opacity: 1, y: 0 }}
            initial={{opacity: 0, y: 50 }}
            transition={{duration: 0.3, delay: index * 0.1 }}
            className="mb-12 flex flex-wrap items-center bg-red-500 bg-opacity-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">      
            <div className="w-full lg:w-1/3 mb-4 lg:mb-0 flex justify-center items-center">
              <div className="w-64 h-64 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <ImageDisplay images={service.imageUrl} />
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <h6 className="mb-3 text-3xl font-bold text-red-300">
                {service.services}
              </h6>
              {Array.isArray(service.description) && service.description.length > 1 ? (
                <ul className="mb-4 text-red-100 text-lg leading-relaxed list-disc list-inside">
                  {service.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="mb-4 text-red-100 text-lg leading-relaxed">
                  {Array.isArray(service.description) ? service.description[0] : service.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const ImageDisplay = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageArray = Array.isArray(images) ? images : [images];

  useEffect(() => {
    if (imageArray.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [imageArray]);

  return (
    <img 
      src={imageArray[currentImageIndex]} 
      alt={`Service image ${currentImageIndex + 1}`} 
      className="w-full h-full object-cover"
    />
  );
};

export default Services