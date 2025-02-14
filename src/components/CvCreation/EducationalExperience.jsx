/* eslint-disable react/prop-types */
import "../../styles/EducationalExperience.css";
function EducationList({ educations, set }) {
  return educations.map((education, index) => (
    <Education
      key={index}
      schoolName={education.schoolName}
      degree={education.degree}
      startDate={education.startDate}
      endDate={education.endDate}
      set={set}
      index={index}
    />
  ));
}
function Education({ schoolName, degree, startDate, endDate, set, index }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    set((prevState) => {
      const newEducationalExperience = [...prevState.educationalExperience];
      newEducationalExperience[index] = {
        ...newEducationalExperience[index],
        [name]: value,
      };
      return {
        ...prevState,
        educationalExperience: newEducationalExperience,
      };
    });
  };
  const handleDelete = () => {
    set((prevState) => {
      const newEducations = prevState.educationalExperience.filter(
        (_, i) => i !== index
      );
      return {
        ...prevState,
        educationalExperience: newEducations,
      };
    });
  };
  return (
    <div className="content">
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
      <div className="schoolName">
        <label htmlFor={`schoolName-${index}`}>School Name</label>
        <input
          type="text"
          name="schoolName"
          id={`schoolName-${index}`}
          value={schoolName}
          onChange={handleChange}
          className="specialInput"
        />
      </div>
      <div className="degree">
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          name="degree"
          id="degree"
          value={degree}
          onChange={handleChange}
          className="specialInput"
        />
      </div>
      <div className="date">
        <div className="startDateEndDate">
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
    </div>
  );
}
export default function EducationalExperience({ educations, set }) {
  const addEducation = () => {
    set((prevState) => ({
      ...prevState,
      educationalExperience: [
        ...prevState.educationalExperience,
        {
          schoolName: "",
          degree: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
  };
  return (
    <div className="EducationalExperience">
      <p className="EduExpTitle">Educational Experience</p>
      <EducationList educations={educations} set={set} />
      <div className="addEducation" onClick={addEducation}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#448fed"
        >
          <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
        </svg>
        <button>Add one more Education</button>
      </div>
    </div>
  );
}
