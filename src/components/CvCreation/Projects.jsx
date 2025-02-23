/* eslint-disable react/prop-types */
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function ProjectList({ projects, set }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {projects.map((project, index) => (
        <Project
          key={index}
          index={index}
          projectName={project.projectName}
          projectLanguages={project.projectLanguages}
          description={project.description}
          startDate={project.startDate}
          endDate={project.endDate}
          set={set}
        />
      ))}
    </div>
  );
}
function Project({
  index,
  projectName,
  projectLanguages,
  description,
  startDate,
  endDate,
  set,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    set((prevState) => {
      const newProjects = [...prevState.projects];
      newProjects[index] = {
        ...newProjects[index],
        [name]: value,
      };
      return { ...prevState, projects: newProjects };
    });
  };
  const handleDelete = () => {
    set((prevState) => {
      const newProjects = prevState.projects.filter((_, i) => i !== index);
      return {
        ...prevState,
        projects: newProjects,
      };
    });
  };
  const handleDescriptionChange = (value) => {
    set((prevState) => {
      const newProjects = [...prevState.projects];
      newProjects[index] = {
        ...newProjects[index],
        description: value,
      };
      return {
        ...prevState,
        projects: newProjects,
      };
    });
  };
  return (
    <div className="relative flex w-[97%] flex-col flex-wrap justify-between gap-3 rounded-md border border-gray-200 p-3 md:flex-row">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20px"
        viewBox="0 -960 960 960"
        width="20px"
        fill="currentColor"
        className="absolute top-3 right-4 cursor-pointer hover:text-sky-400"
        onClick={handleDelete}
      >
        <title>Delete</title>
        <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
      </svg>
      <div className="flex w-full flex-col gap-2 pt-3 md:w-[49%] lg:w-[48%]">
        <label htmlFor="projectName" className="text-gray-600">
          Project Name
        </label>
        <input
          type="text"
          name="projectName"
          id="projectName"
          value={projectName}
          onChange={handleChange}
          className="h-10 w-full rounded-md bg-gray-100 p-2 placeholder:text-gray-600"
        />
      </div>
      <div className="flex w-full flex-col gap-2 md:w-[49%] md:pt-3 lg:w-[48%]">
        <label htmlFor="projectLanguages" className="text-gray-600">
          Technologies Used
        </label>
        <input
          type="text"
          name="projectLanguages"
          id="projectLanguages"
          value={projectLanguages}
          onChange={handleChange}
          className="h-10 w-full rounded-md bg-gray-100 p-2 placeholder:text-gray-600"
        />
      </div>
      <div className="flex w-full flex-col gap-2 md:w-[49%] lg:w-[48%]">
        <label htmlFor="startDate" className="text-gray-600">
          Start & End Date
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            name="startDate"
            id="startDate"
            value={startDate}
            onChange={handleChange}
            className="h-10 w-full rounded-md bg-gray-100 p-2 placeholder:text-gray-600"
          />
          <input
            type="text"
            name="endDate"
            id="endDate"
            value={endDate}
            onChange={handleChange}
            className="h-10 w-full rounded-md bg-gray-100 p-2 placeholder:text-gray-600"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 md:w-full">
        <label htmlFor="description" className="text-gray-600">
          Description
        </label>
        <ReactQuill
          value={description}
          onChange={handleDescriptionChange}
          theme="snow"
          className="w-full rounded-md bg-gray-100 p-2"
        />
      </div>
    </div>
  );
}
export default function Projects({ projects, set }) {
  const addProject = () => {
    set((prevState) => ({
      ...prevState,
      projects: [
        ...prevState.projects,
        {
          projectName: "",
          projectLanguages: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
  };
  return (
    <div className="mb-2 flex w-full flex-col gap-4 rounded-t-lg rounded-b-lg bg-white p-7">
      <p className="text-xl font-extrabold">Projects</p>
      <ProjectList projects={projects} set={set} />
      <div
        className="ml-12 flex w-[96%] cursor-pointer rounded-md p-2 hover:bg-sky-50"
        onClick={addProject}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="currentColor"
          className="cursor-pointer text-sky-500"
        >
          <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
        </svg>
        <button className="cursor-pointer font-bold text-sky-500">
          Add one more project
        </button>
      </div>
    </div>
  );
}
