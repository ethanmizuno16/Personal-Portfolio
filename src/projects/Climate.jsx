const Climate = () => {
    return (
      <div className="max-w-3xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-gray-900">Anthropogenic Climate Change and its Impacts </h1>
        <p className="text-lg text-gray-700 mt-4">
          {/* Add your project description here */}
        </p>
  
        {/* Project Image */}
        <div className="mt-6 flex justify-center">
          <img src="/images/baseballclutch.png" alt="Baseball Clutch" className="w-full max-w-lg rounded-lg shadow-lg" />
        </div>
  
        {/* Technologies Used */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900">Technologies Used</h2>
          <div className="flex flex-wrap mt-2">
            {/* Add technology tags */}
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full mx-2">Python</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full mx-2">Pandas</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full mx-2">Jupyter Notebook</span>
          </div>
        </div>
  
        {/* Project Demo and Documents */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900">Project Resources</h2>
          <div className="mt-2">
            <a href="/documents/baseballclutch.pdf" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="block text-green-600 hover:underline mt-2">
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Climate;
  