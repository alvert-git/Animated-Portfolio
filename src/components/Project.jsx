// Project.jsx
import React, { useState, useMemo } from "react";
import { projectsData } from '../lib/data';
import ProjectCard from "./ui/ProjectCard"; 

const Project = () => {
  // 1. State to manage the currently selected filter category
  const [filter, setFilter] = useState('All');

  // 2. Define all possible categories (including 'All')
  const categories = ['All', 'Web Development', 'Data Science', 'UI/UX Design'];

  // 3. Use useMemo to filter the projects data efficiently
  const filteredProjects = useMemo(() => {
    if (filter === 'All') {
      return projectsData;
    }
    // Filter projects where the category matches the selected filter
    return projectsData.filter(project => project.category === filter);
  }, [filter]); // Re-run the filter whenever the 'filter' state changes

  // 4. Handler function for button clicks
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <section id="projects">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 mx-auto">
        <h2 className="text-5xl font-extrabold uppercase mb-10">
          SELECTED PROJECT
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`
                text-sm font-medium  
                ${
                  filter === category
                    ? 'text-black ' // Active state
                    : 'text-gray-400 hover:text-gray-800' // Inactive state
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 md:gap-y-0 px-2 sm:px-2 md:px-4  min-h-[50vh] mt-10">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
            <p className="text-xl text-gray-500 col-span-full text-center">
              No projects found in the "{filter}" category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
