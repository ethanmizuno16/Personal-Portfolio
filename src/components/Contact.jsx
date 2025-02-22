import { CONTACT } from "../constants/Index"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
    <motion.h2
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 0.5 }}
    className="my-10 text-center text-4xl text-gray-900"
    >
    Get in Touch
    </motion.h2>
    <div className="text-center tracking-tighter text-gray-900">
        <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1}}
         className="my-4"
         >
          {CONTACT.address}
        </motion.p>
        <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1}}
        className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href="mailto:ethanmizuno16@gmail.com" className="border-b hover:text-purple-500 transition duration-300">
          {CONTACT.email}
        </a>
    </div>
    </div>
  )
}

export default Contact