import { Link } from "react-router-dom";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Navbar = () => {
    return (
    <nav className= "mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
        <a href="/" className="ml-32 mx-2 text-xl font-bold bg-gradient-to-r from-pink-500 via-gray-700 to-purple-600 bg-clip-text text-transparent">
            Ethan Mizuno
            </a>
        </div>

        <div className="flex gap-6 text-lg">
                <Link to="/about" className="text-gray-700 hover:text-gray-900 transition">About Me</Link>
                <Link to="/resume" className="text-gray-700 hover:text-gray-900 transition">Resume</Link>
                <Link to="/projects" className="text-gray-700 hover:text-gray-900 transition">Projects</Link>
            </div>

        {/* social icons */}
        <div className="m-8 flex items=center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ethanmizuno/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-700 hover:text-blue-500 transition duration-300"/>
            </a>
            <a href="https://github.com/ethanmizuno16" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-700 hover:text-gray-900 transition duration-300"/>
            </a>
            <a href="https://www.instagram.com/ethanmizuno16/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-700 hover:text-pink-500 transition duration-300"/>
            </a>
            <a href="https://www.facebook.com/ethan.mizuno" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-gray-700 hover:text-blue-700 transition duration-300"/>
            </a>
        </div>
    </nav>
    );
};

export default Navbar;