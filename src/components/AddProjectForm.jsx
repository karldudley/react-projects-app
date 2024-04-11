import { forwardRef, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddProjectForm = forwardRef(function AddProjectForm(
  { addNewProject },
  ref
) {
  const formRef = useRef(null); // Ref for the form itself

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    const newProject = {
      id: uuidv4(),
      name: formData.get('projectName'),
      description: formData.get('projectDescription'),
      due: formData.get('dueDate'),
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
    };

    addNewProject(newProject);
    formRef.current.reset();
  };

  return (
    <dialog ref={ref} className="p-6 bg-white rounded-lg shadow-md">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4"
      >
        <input
          type="text"
          placeholder="Project Name"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="projectName"
        />
        <textarea
          placeholder="Project Description"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="projectDescription"
        ></textarea>
        <input
          type="date"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="dueDate"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add Project
        </button>
      </form>
    </dialog>
  );
});

export default AddProjectForm;
