// ProjectCard.jsx
import React from 'react';
// Assuming MY_STACK is exported from a file named 'data.js' or similar
import { MY_STACK } from '../../lib/data'; // ADJUST THIS PATH AS NEEDED
import {  useNavigate } from 'react-router-dom';

const ProjectCard = ({ project, index }) => {
  const isSecondItem = index === 1;
  const mtClass = isSecondItem ? "md:mt-32" : ""; // Apply margin only to the second item on medium screens and up

  // Function to get logo paths from the MY_STACK object
  const getStackLogos = (stackString) => {
    if (!stackString) return [];

    // Split the string by comma and trim whitespace
    const stackNames = stackString.split(',').map(name => name.trim());
    const allStackItems = [
      ...MY_STACK.frontend,
      ...MY_STACK.backend,
      ...MY_STACK.database,
      ...MY_STACK.data_science,
      ...MY_STACK.tools,
    ];

    // Find the logo object for each name
    return stackNames
      .map(name => allStackItems.find(item => item.name.toLowerCase() === name.toLowerCase()))
      .filter(item => item !== undefined); // Filter out any names not found
  };

  const logos = getStackLogos(project.stack);

  const navigate = useNavigate();

   const handleReadMoreClick = () => {
    // Correctly navigate to the route defined in App.jsx
    navigate(`/project/${project.id}`);
  };
  return (
    <div
      className={`group ${mtClass} `}
    >
      <a href={project.link} target='_blank' rel="noopener noreferrer" className="block">
        {/* Image Container */}
        <div
          className="relative overflow-hidden w-full aspect-[4/3] bg-gray-100 "
        >
          <img
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            src={project.imageSrc}
          />
        </div>
      </a>

      {/* Content */}
      <div className="mt-6 flex flex-col items-start gap-3">
        {/* Title and Year */}
        <div className="flex w-full justify-between items-baseline">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-sm font-mono text-gray-400">{project.year}</span>
        </div>

        {/* Category */}
        <p className="text-xs text-indigo-600 font-medium uppercase tracking-widest">
          {project.category}
        </p>

        {/* Tech Stack Logos */}
        {logos.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-2">
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo.icon}
                alt={logo.name}
                title={logo.name}
                className="h-6 w-6 object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
            ))}
          </div>
        )}
      </div>

      {/* Read More Button */}
      <div className="mt-6">
        
        <button onClick={handleReadMoreClick} className='text-gray-500 text-sm font-medium cursor-pointer hover:text-gray-800'>
          Read More
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

