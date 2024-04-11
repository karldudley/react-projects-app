import React from 'react';

export default function ProjectsSidebar({ projects, onProjectSelect }) {
  const handleProjectClick = (projectId) => {
    onProjectSelect(projectId);
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ul className="p-2">
        {projects.map((project) => (
          <li
            key={project.id}
            className="p-2 bg-gray-100 mb-2 rounded shadow-sm hover:bg-gray-200"
          >
            <span className="font-medium">{project.name}</span>
            <button
              onClick={() => handleProjectClick(project.id)}
              className="ml-2 bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"
            >
              Select
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}