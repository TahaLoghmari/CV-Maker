/* eslint-disable react/prop-types */
function EducationList({ educations, set }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {educations.map((education, index) => (
        <Education
          key={index}
          schoolName={education.schoolName}
          degree={education.degree}
          startDate={education.startDate}
          endDate={education.endDate}
          set={set}
          index={index}
        />
      ))}
    </div>
  );
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
        (_, i) => i !== index,
      );
      return {
        ...prevState,
        educationalExperience: newEducations,
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
        <label htmlFor={`schoolName-${index}`} className="text-gray-600">
          School Name
        </label>
        <input
          type="text"
          name="schoolName"
          id={`schoolName-${index}`}
          value={schoolName}
          onChange={handleChange}
          className="h-10 w-full rounded-md bg-gray-100 p-2 placeholder:text-gray-600"
        />
      </div>
      <div className="flex w-full flex-col gap-2 md:w-[49%] md:pt-3 lg:w-[48%]">
        <label htmlFor="degree" className="text-gray-600">
          Degree
        </label>
        <input
          type="text"
          name="degree"
          id="degree"
          value={degree}
          onChange={handleChange}
          className="h-10 w-full rounded-md bg-gray-100 p-2 placeholder:text-gray-600"
        />
      </div>
      <div className="flex w-full flex-col gap-2 md:w-[49%] lg:w-[48%]">
        <div className="startDateEndDate">
          <label htmlFor="startDate" className="text-gray-600">
            Start & End Date
          </label>
          <div className="dates flex gap-2">
            <input
              type="text"
              name="startDate"
              id="startDate"
              value={startDate}
              onChange={handleChange}
              className="h-10 w-1/2 rounded-md bg-gray-100 p-2 placeholder:text-gray-600"
            />
            <input
              type="text"
              name="endDate"
              id="endDate"
              value={endDate}
              onChange={handleChange}
              className="h-10 w-1/2 rounded-md bg-gray-100 p-2 placeholder:text-gray-600"
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
    <div className="mb-2 flex w-full flex-col gap-4 rounded-t-lg rounded-b-lg bg-white p-7">
      <p className="text-xl font-extrabold">Educational Experience</p>
      <EducationList educations={educations} set={set} />
      <div
        className="ml-12 flex w-[96%] cursor-pointer rounded-md p-2 hover:bg-sky-50"
        onClick={addEducation}
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
          Add one more Education
        </button>
      </div>
    </div>
  );
}
