import Experience from "./Experience";
import Technologies from "./Technologies";

const Resume = () => {
  return (
    <div className="container mx-auto px-8">
      <Experience />
      <Technologies />
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">View My Resume</h2>
        <a 
          href="/documents/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline"
        >
          📄 Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;