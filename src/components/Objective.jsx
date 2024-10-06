import {OBJECTIVES_CONTENT} from "../constants";
import { motion} from "framer-motion";

const Objective = () => {
  return (
    <div className="pt-20 pb-24 min-h-screen flex flex-col justify-center">
      <motion.h1 
        whileInView={{opacity: 1, y: 0 }}
        initial={{opacity: 0, y: -100 }}
        transition={{duration: 0.5 }} 
       className="mb-20 text-center font-bold text-6xl">OBJECTIVE</motion.h1>
      <motion.p
        whileInView={{opacity: 1, x: 0 }}
        initial={{opacity: 0, x: -100 }}
        transition={{duration: 0.5 }}       
       className="mx-20 text-center text-xl">{OBJECTIVES_CONTENT}</motion.p> 
    </div>
  )
}

export default Objective