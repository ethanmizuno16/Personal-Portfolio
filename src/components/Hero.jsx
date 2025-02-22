import { HERO_CONTENT } from "../constants/Index";
import profilePic from "../assets/EthanMizunoProfile.png"
import { delay, motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay },
    },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-6 lg:mb-10">
        <div className="flex flex-wrap lg:flex-nowrap items-center">
            <div className="w-full lg:w-3/5 pr-6">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-4xl font-thin text-gray-900 tracking-tight
                    lg:text-6xl">
                    Ethan Mizuno
                    </motion.h1>
                    <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-500 via-gray-700 to-purple-600 bg-clip-text text-xl lg:text-2xl tracking-tight text-transparent"
                    >
                    Prospective Medical School Student
                    </motion.span>
                    <motion.p 
                    variants={container(1.0)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-2-xl py-6 text-gray-900 font-light tracking-tighter"
                    >
                    {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-2/5 lg:p-6">
                <div className="flex justify-end">
                    <motion.img 
                    initial={{ x:100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    src= {profilePic} alt="Ethan Mizuno" />
                </div>
            </div>
        </div>
  </div>
  );
};
export default Hero