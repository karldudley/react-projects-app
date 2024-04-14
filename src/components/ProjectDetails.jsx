import { useState } from 'react';

export default function ProjectDetails({
  projects,
  selectedProjectId,
  updateProjectTasks,
}) {
  const [taskDescriptions, setTaskDescriptions] = useState(
    projects
      .filter((project) => project.id === selectedProjectId)[0]
      .tasks.map((task) => ({ id: task.id, description: task.description }))
  );

  const handleDescriptionChange = (taskId, newDescription) => {
    setTaskDescriptions((prevDescriptions) =>
      prevDescriptions.map((desc) =>
        desc.id === taskId ? { ...desc, description: newDescription } : desc
      )
    );

    // Call the parent function to update projects
    const updatedTasks = taskDescriptions.map((desc) =>
      desc.id === taskId ? { ...desc, description: newDescription } : desc
    );
    updateProjectTasks(updatedTasks);
  };

  console.log(projects);

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
                  {project.tasks.map((task) => {
                    const taskDesc = taskDescriptions.find(
                      (desc) => desc.id === task.id
                    );
                    return (
                      <li
                        key={task.id}
                        className="p-2 bg-gray-100 mb-2 rounded shadow-sm"
                      >
                        {task.name}
                        <input
                          type="text"
                          value={taskDesc ? taskDesc.description : ''}
                          onChange={(e) =>
                            handleDescriptionChange(task.id, e.target.value)
                          }
                          className="text-gray-500 text-sm"
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
