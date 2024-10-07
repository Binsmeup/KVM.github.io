import MISSIONimg from "../assets/MISSION.jpg";
import VISIONimg from "../assets/VISION.jpg"; 
import { MISSION_CONTENT, VISION_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  const [showMission, setShowMission] = useState(true);

  const toggleContent = () => {
    setShowMission(!showMission);
    console.log("Toggled content. showMission:", !showMission);
  };

  // Updated getContent function
  const getContent = () => {
    return showMission ? MISSION_CONTENT : VISION_CONTENT;
  };

  return (
    <div id="about" className="drop-shadow-2xl mt-20 pb-2 pt-2 bg-red-100 rounded-lg">
      <div className="flex flex-wrap">
        <motion.div 
          whileInView={{opacity: 1, x: 0 }}
          initial={{opacity: 0, x: -100 }}
          transition={{duration: 0.5 }}
          className="w-full lg:w-1/2 p-4 lg:p-8 flex items-center justify-center">
          <div className="w-full aspect-[8/9] relative overflow-hidden rounded-2xl shadow-lg">
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out"
              src={showMission ? MISSIONimg : VISIONimg} 
              alt={showMission ? "Mission Image" : "Vision Image"} 
            />
          </div>
        </motion.div>
        <motion.div 
          whileInView={{opacity: 1, x: 0 }}
          initial={{opacity: 0, x: 100 }}
          transition={{duration: 0.5 }}           
          className="w-full lg:w-1/2 flex flex-col"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-6 sm:py-10">
            <h1 className="font-bold text-4xl sm:text-6xl w-full sm:w-48 text-center sm:text-left mb-4 sm:mb-0">
              {showMission ? "MISSION" : "VISION"}
            </h1>
            <FaArrowRight 
              className="text-4xl sm:text-6xl cursor-pointer hover:text-red-500 transition-colors"
              onClick={toggleContent}
            />
          </div>
          <div className="flex-grow overflow-y-auto px-6">
            {showMission ? (
              <ul className="my-2 max-w-xl py-8 list-disc pl-6 text-lg">
                {getContent().map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            ) : (
              <p className="my-2 max-w-xl py-8 text-xl">
                {getContent()}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;