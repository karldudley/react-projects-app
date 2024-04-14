import React from 'react';

export default function ProjectsSidebar({
  projects,
  onProjectSelect,
  onProjectDelete,
  selectedProjectId,
}) {
  const handleProjectClick = (projectId) => {
    onProjectSelect(projectId);
  };
  const handleDeleteClick = (projectId) => {
    onProjectDelete(projectId);
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className="p-2 bg-gray-100 mb-2 rounded shadow-sm flex justify-between items-center"
          >
            <span className="font-medium">{project.name}</span>
            <button
              onClick={() => handleProjectClick(project.id)}
              className={`ml-2 bg-blue-500  text-white px-1 py-1 rounded focus:outline-none focus:shadow-outline 
              ${
                project.id === selectedProjectId
                  ? 'bg-red-700'
                  : 'hover:bg-blue-700'
              } `}
            >
              Go
            </button>
            <button
              onClick={() => handleDeleteClick(project.id)}
              className={`ml-2 bg-blue-500  text-white px-1 py-1 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700`}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
