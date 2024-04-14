import { useState, useRef } from 'react';
import NoProject from './components/NoProject';
import ProjectsSidebar from './components/ProjectsSidebar';
import ProjectDetails from './components/ProjectDetails';
import AddProjectForm from './components/AddProjectForm';

function App() {
  const [projects, setProjects] = useState([]);

  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const dialog = useRef();

  const handleProjectSelect = (projectId) => {
    if (projectId === selectedProjectId) {
      setSelectedProjectId(null);
      return;
    }
    setSelectedProjectId(projectId);
  };

  const handleProjectDelete = (projectId) => {
    if (projectId === selectedProjectId) {
      setSelectedProjectId(null);
    }
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== projectId)
    );
  };

  const handleAddProjectClick = () => {
    dialog.current.showModal();
  };

  const addNewProject = (project) => {
    setProjects([...projects, project]);
    dialog.current.close();
  };

  const updateProjectTasks = (updatedTasks) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === selectedProjectId
          ? { ...project, tasks: updatedTasks }
          : project
      )
    );
  };

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Projects App</h1>
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 p-4">
          <div className="bg-gray-200 p-4 flex flex-col">
            <ProjectsSidebar
              projects={projects}
              onProjectSelect={handleProjectSelect}
              onProjectDelete={handleProjectDelete}
              selectedProjectId={selectedProjectId}
            />
            <button
              onClick={handleAddProjectClick}
              className=" bg-blue-500 hover:bg-blue-700 text-white py-1 rounded focus:outline-none focus:shadow-outline"
            >
              Add Project
            </button>
          </div>
        </div>
        <div className="w-full md:w-3/4 p-4">
          <div className="bg-gray-300 p-4">
            {selectedProjectId === null ? (
              <>
                <NoProject />
              </>
            ) : (
              <ProjectDetails
                projects={projects}
                selectedProjectId={selectedProjectId}
                updateProjectTasks={updateProjectTasks}
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
