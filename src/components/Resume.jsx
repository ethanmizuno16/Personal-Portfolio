import Experience from "./Experience";
import Technologies from "./Technologies";

const Resume = () => {
  return (
    <div className="container mx-auto px-8">
      <Experience />
      <Technologies />
      <div className="text-center mt-10">
        <a
          href="/Ethan Mizuno Resume January 2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-bold text-gray-800 hover:bg-gradient-to-r from-pink-500 via-gray-700 to-purple-600 hover:bg-clip-text hover:text-transparent transition duration-300"
        >
          📄 View PDF Version
        </a>
      </div>
    </div>
  );
};

export default Resume;