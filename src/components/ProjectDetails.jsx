// ProjectDetails.jsx (REVISED)
import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../lib/data'; // Adjust path as needed
import { MY_STACK } from '../lib/data'; // To get the logos
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon

// Pre-process the MY_STACK data for logo lookup
const ALL_STACK_ITEMS = [
  // ... (Keep this array as it is)
  ...MY_STACK.frontend,
  ...MY_STACK.backend,
  ...MY_STACK.database,
  ...MY_STACK.data_science,
  ...MY_STACK.tools,
];

// Function to get logo paths from the MY_STACK object (Keep this function as it is)
const getStackLogos = (stackString) => {
    if (!stackString) return [];
    const stackNames = stackString.split(',').map(name => name.trim());
    return stackNames
      .map(name => ALL_STACK_ITEMS.find(item => item.name.toLowerCase() === name.toLowerCase()))
      .filter(item => item !== undefined);
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  // Handle case where project is not found
  if (!project) {
    return (
      <div className="max-w-7xl mx-auto py-20 px-4 text-center">
        <h1 className="text-4xl font-bold text-red-600">404 - Project Not Found</h1>
        <p className="mt-4 text-gray-600">The project you are looking for does not exist.</p>
      </div>
    );
  }

  const logos = getStackLogos(project.stack);

  // Use optional chaining for safe access to description
  const overview = project.description?.overview;
  const features = project.description?.features;
  const techStackDetails = project.description?.techStack;

  return (
    <div className="max-w-6xl mx-auto py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Header Section */}
      <header className="mb-12">
        <span className="text-sm font-medium uppercase tracking-widest text-indigo-600">
          {project.category} / {project.year}
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold mt-2 text-gray-900">
          {project.title}
        </h1>
      </header>

      {/* Main Image (Uncommented and improved)
      <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
        <img
          src={project.imageSrc}
          alt={project.title}
          className="w-full h-auto object-cover"
        />
      </div> */}

      {/* Overview and Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Overview/Description */}
        <div className="lg:col-span-2">
          
          {/* Overview Section - Only show if overview exists */}
          {overview && (
            <>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Overview</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {overview}
              </p>
            </>
          )}

          {/* Core Features Section - Only show if features array exists and has content */}
          {features && features.length > 0 && (
            <>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Core Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                {features.map((feature, index) => (
                  <li key={index} className="text-lg">
                    {feature}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Right Column: Sidebar (Tech Stack & Links) */}
        <aside className="lg:col-span-1 space-y-6">
          
          {/* Live Link */}
          <div className="p-6 bg-gray-50 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Live Project</h3>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block w-full text-center py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Visit Website
            </a>
          </div>
          
          {/* GitHub Link - Only show if project.github exists */}
          {project.github && (
            <div className="p-6 bg-gray-50 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Source Code</h3>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center w-full text-center py-3 px-6 border border-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
              >
                <FaGithub className="mr-2 text-xl" />
                View on GitHub
              </a>
            </div>
          )}

          {/* Tech Stack Section - Only show if stack exists */}
          {project.stack && (
            <div className="p-6 bg-gray-50 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Technology Stack</h3>
              
              {/* Stack Logos */}
              {logos.length > 0 && (
                <div className="flex flex-wrap gap-4 mb-6">
                  {logos.map((logo, i) => (
                    <img
                      key={i}
                      src={logo.icon}
                      alt={logo.name}
                      title={logo.name}
                      className="h-8 w-8 object-contain"
                    />
                  ))}
                </div>
              )}

              {/* Detailed Stack List - Only show if techStackDetails array exists */}
              {techStackDetails && techStackDetails.length > 0 && (
                <div className="space-y-4">
                  {techStackDetails.map((item, index) => (
                    <div key={index}>
                      <p className="text-sm font-semibold uppercase text-indigo-600">{item.layer}</p>
                      <p className="text-gray-600">{item.technologies}</p>
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default ProjectDetails;
