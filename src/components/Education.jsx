import { motion } from "framer-motion";
import { EDUCATION } from "../constants/Index";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Section Title */}
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-gray-900"
      >
        Education
      </motion.h2>

      {/* Education List */}
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center items-center">
            
            {/* Logo Section - Placeholder for School Logo */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/6 flex justify-center items-center"
            >
              <img src={education.logo} alt={education.institution} className="w-32 h-32 object-contain"/>
            </motion.div>

            {/* Education Details */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              {/* School Name and Degree */}
              <h6 className="mb-1 font-semibold text-gray-800">
                <span className="text-lg font-bold text-gray-800">{education.school}</span> -{" "}
                <span className="text-md text-purple-600">{education.degree}</span>
              </h6>

              {/* Dates Moved Below */}
              <p className="mb-2 text-sm text-gray-600">{education.year}</p>

              {/* Description */}
              <p className="mb-4 text-gray-800">{education.description}</p>
            </motion.div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;