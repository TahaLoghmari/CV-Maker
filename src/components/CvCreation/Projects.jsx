/* eslint-disable react/prop-types */
import "../../styles/Projects.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function ProjectList({ projects, set }) {
  return (
    <div className="projectList">
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
    <div className="project">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20px"
        viewBox="0 -960 960 960"
        width="20px"
        fill="currentColor"
        className="trash"
        onClick={handleDelete}
      >
        <title>Delete</title>
        <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
      </svg>
      <div className="projectSmallDetails">
        <div className="projectName">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            name="projectName"
            id="projectName"
            value={projectName}
            onChange={handleChange}
            className="specialInput"
          />
        </div>
        <div className="projectLanguages">
          <label htmlFor="projectLanguages">Technologies Used</label>
          <input
            type="text"
            name="projectLanguages"
            id="projectLanguages"
            value={projectLanguages}
            onChange={handleChange}
            className="specialInput"
          />
        </div>
        <div className="date">
          <label htmlFor="startDate">Start & End Date</label>
          <div className="dates">
            <input
              type="text"
              name="startDate"
              id="startDate"
              value={startDate}
              onChange={handleChange}
            />
            <input
              type="text"
              name="endDate"
              id="endDate"
              value={endDate}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="description">
        <label htmlFor="description">Description</label>
        <ReactQuill
          value={description}
          onChange={handleDescriptionChange}
          theme="snow"
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
    <div className="projects">
      <p className="projectsTitle">Projects</p>
      <ProjectList projects={projects} set={set} />
      <div className="addProject" onClick={addProject}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#448fed"
        >
          <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
        </svg>
        <button>Add one more project</button>
      </div>
    </div>
  );
}
