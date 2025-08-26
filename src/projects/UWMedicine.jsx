import { motion } from "framer-motion";
import AppHomepage from "../assets/AppHomepage.png"

const UWMedicine = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Project Title */}
      <motion.h1
        className="text-4xl font-bold text-gray-900 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Swiss Army Doc: A Mobile Solution for Anesthesiology Workflow
      </motion.h1>

      {/* Project Description */}
      <motion.p
        className="text-lg text-gray-700 mt-4 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Swiss Army Doc is an innovative mobile application designed to improve communication and task coordination within 
        anesthesiology teams. Developed as a proof-of-concept, the app serves as a centralized hub for managing 
        clinical logistics, optimizing workflow, and improving intraoperative efficiency across various hospital settings.  
        By streamlining real-time data tracking and communication, the platform enhances collaboration among anesthesiologists, 
        residents, CRNAs, and anesthesia technicians.
      </motion.p>

      {/* Problem Statement */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">Problem Statement</h2>
        <div className="text-lg text-gray-700 mt-4 text-center">
        Current OR communication methods are inefficient and can hinder patient safety and clinical outcomes. This project addresses the need for a system that allows real-time monitoring and communication, improving surgical outcomes and operational efficiency.
        </div>
      </div>

      {/* Project Image */}
      <motion.div
        className="mt-8 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center">
          <img
            src={AppHomepage}
            alt="App Homepage"
            className="w-full max-w-sm max-h-screen rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
          <p className="text-md text-bold text-gray-600 mt-2 text-center">
            App Homepage
          </p>
        </div>
      </motion.div>

      {/* Technologies Used */}
      <div className="mt-10">
  <h2 className="text-2 xl font-bold text-center text-gray-900 mb-6">Technologies Used</h2>
  <div className="flex flex-wrap justify-center gap-3">
    {["React Native", "Firebase Firestore", "Expo", "GitHub Pages"].map((tech) => (
      <span
        key={tech}
        className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm transition duration-200 ease-in-out"
      >
        {tech}
      </span>
    ))}
  </div>
</div>

      {/* Project Features */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">Features: </h2>
      </div>
      

      {/* Feedback & Results */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">Initial Feedback & Usability Testing</h2>
        <motion.p
          className="text-lg text-gray-700 mt-4 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          The app underwent **cross-sectional usability testing** with anesthesiology clinicians, including attending 
          anesthesiologists, residents, and CRNAs at an academic hospital. Users completed the **Post-Study System Usability 
          Questionnaire (PSSUQ)**, which assessed **system usefulness, information quality, and interface quality**.  
          Results indicated **high usability and strong system acceptance**, with participants highlighting the app’s potential 
          to **streamline intraoperative communication and improve logistical coordination**.
        </motion.p>
      </div>

      {/* Project Demo */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">Project Demo</h2>
        <div className="mt-4 flex justify-center">
          <video
            className="w-full max-w-2xl rounded-lg shadow-lg"
            controls
          >
            <source src="/videos/uwmedicine_demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      </div>
  );
};

export default UWMedicine;
