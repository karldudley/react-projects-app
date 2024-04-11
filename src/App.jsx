import { useState, useRef } from 'react';
import NoProject from './components/NoProject';
import ProjectsSidebar from './components/ProjectsSidebar';
import ProjectDetails from './components/ProjectDetails';
import AddProjectForm from './components/AddProjectForm';

function App() {
  const [projects, setProjects] = useState([
    {
      id: 0,
      name: 'Project 1',
      description: 'This is project 1',
      due: '2021-12-31',
      tasks: [
        {
          id: 1,
          name: 'Task 1',
          description: 'This is task 1',
        },
        {
          id: 2,
          name: 'Task 2',
          description: 'This is task 2',
        },
        {
          id: 3,
          name: 'Task 3',
          description: 'This is task 3',
        },
      ],
    },
    {
      id: 1,
      name: 'Project 2',
      description: 'This is project 2',
      due: '2021-12-31',
      tasks: [
        {
          id: 1,
          name: 'Task 1',
          description: 'This is task 1',
        },
        {
          id: 2,
          name: 'Task 2',
          description: 'This is task 2',
        },
        {
          id: 3,
          name: 'Task 3',
          description: 'This is task 3',
        },
      ],
    },
    {
      id: 2,
      name: 'Project 3',
      description: 'This is project 3',
      due: '2021-12-31',
      tasks: [
        {
          id: 1,
          name: 'Task 1',
          description: 'This is task 1',
        },
        {
          id: 2,
          name: 'Task 2',
          description: 'This is task 2',
        },
        {
          id: 3,
          name: 'Task 3',
          description: 'This is task 3',
        },
      ],
    },
  ]);

  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const dialog = useRef();

  const handleProjectSelect = (projectId) => {
    if (projectId === selectedProjectId) {
      setSelectedProjectId(null);
      return;
    }
    setSelectedProjectId(projectId);
  };

  const handleAddProjectClick = () => {
    dialog.current.showModal();
  };

  const addNewProject = (project) => {
    setProjects([...projects, project]);
    dialog.current.close();
  };

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Projects App</h1>
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 p-4">
          <div className="bg-gray-200 p-4">
            <ProjectsSidebar
              projects={projects}
              onProjectSelect={handleProjectSelect}
            />
          </div>
        </div>
        <div className="w-full md:w-3/4 p-4">
          <div className="bg-gray-300 p-4">
            {selectedProjectId === null ? (
              <>
                <NoProject />
                <button
                  onClick={handleAddProjectClick}
                  className="ml-2 bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"
                >
                  Add Project
                </button>
              </>
            ) : (
              <ProjectDetails
                projects={projects}
                selectedProjectId={selectedProjectId}
              />
            )}
          </div>
        </div>
      </div>
      <AddProjectForm ref={dialog} addNewProject={addNewProject} />
    </>
  );
}

export default App;
