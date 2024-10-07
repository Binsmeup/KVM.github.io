import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import mapImage from "../assets/location.png";
import officeImage from "../assets/Office.jpg";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Location = () => {
  const [currentImage, setCurrentImage] = useState(mapImage);
  const officeAddress = "KVM Electronics Services, San Manuel Block 5, Tarlac City, 2300 Tarlac";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => prevImage === mapImage ? officeImage : mapImage);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-16 ">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}     
        className="my-24 text-center text-5xl font-bold relative pb-4"
      >
        LOCATION
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-red-500"></span>
      </motion.h1>
      <div className="w-full max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}  // Add hover animation
          className="bg-white shadow-2xl rounded-lg overflow-hidden transition-all duration-300"
        >
          <a 
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-700 hover:text-red-500 transition-all duration-300"
          >
            <div className="md:flex">
              <div className="md:w-1/2 h-96 relative">
                <img 
                  src={currentImage} 
                  alt="Office Location" 
                  className="absolute w-full h-full object-cover transition-opacity duration-500" 
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Office</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-red-500 text-xl mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Address</h3>
                      <p className="text-gray-700">
                        San Manuel Block 5, Tarlac City, 2300 Tarlac
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaPhone className="text-red-500 text-xl mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Phone</h3>
                      <p className="text-gray-700">+63 917 632 7757</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaClock className="text-red-500 text-xl mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Open Hours</h3>
                      <p className="text-gray-700">Monday to Friday, 8:00 AM to 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Location;