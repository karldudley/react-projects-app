import React from 'react';

export default function ProjectDetails({ projects, selectedProjectId }) {
  return (
    <>
      <div className="p-6">
        <div>
          {projects
            .filter((project) => project.id === selectedProjectId)
            .map((project) => (
              <div key={project.id} className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                <p className="mb-2">{project.description}</p>
                <p className="text-gray-600">Due: {project.due}</p>
                <h3 className="text-xl font-bold mt-4">Tasks</h3>
                <ul className="mt-2">
                  {project.tasks.map((task) => (
                    <li
                      key={task.id}
                      className="p-2 bg-gray-100 mb-2 rounded shadow-sm"
                    >
                      {task.name}
                      <p className="text-gray-500 text-sm">
                        {task.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
