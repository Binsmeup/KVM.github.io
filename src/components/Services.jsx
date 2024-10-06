import {EXPERIENCES} from "../constants";
import { motion} from "framer-motion";

const Services = () => {
  return (
    <div id="services" className="custom-inset-shadow py-20 bg-gradient-to-b from-red-900 via-red-800 to-black">
      <motion.h1 
        whileInView={{opacity: 1, y: 0 }}
        initial={{opacity: 0, y: -100 }}
        transition={{duration: 0.5 }}     
        className="mb-10 text-center text-6xl font-bold text-red-100" >
        SERVICES
      </motion.h1>
      <motion.div
        whileInView={{opacity: 1, width: "100px" }}
        initial={{opacity: 0, width: 0 }}
        transition={{duration: 0.5, delay: 0.2 }}
        className="mx-auto h-1 bg-red-300 mb-16"
      />
      <div className="container mx-auto px-4">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{opacity: 1, y: 0 }}
            initial={{opacity: 0, y: 50 }}
            transition={{duration: 0.3, delay: index * 0.1 }}
            className="mb-12 flex flex-wrap items-center bg-red-500 bg-opacity-40 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">      
            <div className="w-full lg:w-1/3 mb-4 lg:mb-0 flex justify-center items-center">
              <div className="w-64 h-64 flex items-center justify-center bg-red-100 bg-opacity-10 rounded-lg p-4">
                <img 
                  src={experience.imageUrl} 
                  alt={`${experience.company} logo`} 
                  className="w-full h-full object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <h6 className="mb-3 text-2xl font-bold text-red-300">
                {experience.services}
              </h6>
              <p className="mb-4 text-red-100 text-lg leading-relaxed">
                {experience.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Services