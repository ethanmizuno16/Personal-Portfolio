import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Navbar = () => {
    return (
    <nav className= "mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <h1 className="mx-2  w-10 text-xl font-bold">Ethan Mizuno</h1>
        </div>
        <div className="m-8 flex items=center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ethanmizuno/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://github.com/ethanmizuno16" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/ethanmizuno16/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="https://www.facebook.com/ethan.mizuno" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
            </a>
        </div>
    </nav>
    );
};

export default Navbar;