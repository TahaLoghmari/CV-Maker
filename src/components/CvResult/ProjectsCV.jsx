/* eslint-disable react/prop-types */
function Projects({ projects }) {
  return projects.map((project, index) => (
    <Project
      projectName={project.projectName}
      projectLanguages={project.projectLanguages}
      startDate={project.startDate}
      endDate={project.endDate}
      description={project.description}
      key={index}
    />
  ));
}
function Project({
  projectName,
  projectLanguages,
  startDate,
  endDate,
  description,
}) {
  return (
    <div className="Project">
      <div className="projectHeader">
        <div className="projectLeft">
          <p className="projectNameCV">{projectName} </p>
          <p>
            {projectName && projectLanguages ? `| ${projectLanguages}` : ""}
          </p>
        </div>
        <p className="startEndDates">
          {startDate && endDate ? `${startDate} - ${endDate}` : ""}
        </p>
      </div>
      <div
        className="PracticalExperiencedescription"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
export default function ProjectsCV({ projects }) {
  return (
    <div className="Projects">
      <div className="ProjectsCvTitle">
        P<span className="ProjectsCvTitleRest">ROJECTS</span>
      </div>
      <Projects projects={projects} />
    </div>
  );
}
