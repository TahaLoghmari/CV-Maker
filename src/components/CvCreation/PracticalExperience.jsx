/* eslint-disable react/prop-types */
import "../../styles/PracticalExperience.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function Positions({ positions, set }) {
  return (
    <div className="jobPositions">
      {positions.map((position, index) => (
        <Position
          key={index}
          companyName={position.companyName}
          positionTitle={position.positionTitle}
          description={position.description}
          country={position.country}
          city={position.city}
          set={set}
          index={index}
          startDate={position.startDate}
          endDate={position.endDate}
        />
      ))}
    </div>
  );
}

function Position({
  companyName,
  positionTitle,
  description,
  country,
  startDate,
  endDate,
  city,
  set,
  index,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    set((prevState) => {
      const newPositions = [...prevState.practicalExperience.positions];
      newPositions[index] = {
        ...newPositions[index],
        [name]: value,
      };
      return {
        ...prevState,
        practicalExperience: {
          ...prevState.practicalExperience,
          positions: newPositions,
        },
      };
    });
  };
  const handleDescriptionChange = (value) => {
    set((prevState) => {
      const newPositions = [...prevState.practicalExperience.positions];
      newPositions[index] = {
        ...newPositions[index],
        description: value,
      };
      return {
        ...prevState,
        practicalExperience: {
          ...prevState.practicalExperience,
          positions: newPositions,
        },
      };
    });
  };
  const handleDelete = () => {
    set((prevState) => {
      const newPositions = prevState.practicalExperience.positions.filter(
        (_, i) => i !== index
      );
      return {
        ...prevState,
        practicalExperience: {
          ...prevState.practicalExperience,
          positions: newPositions,
        },
      };
    });
  };
  return (
    <div className="jobPosition">
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
      <div className="smallDetails">
        <div className="positionTitle">
          <label htmlFor={`positionTitle-${index}`}>Job Title</label>
          <input
            type="text"
            name="positionTitle"
            id={`positionTitle-${index}`}
            value={positionTitle}
            onChange={handleChange}
            className="specialInput"
          />
        </div>
        <div className="companyName">
          <label htmlFor={`companyName-${companyName}`}>Company</label>
          <input
            type="text"
            name="companyName"
            id={`companyName-${companyName}`}
            value={companyName}
            onChange={handleChange}
            className="specialInput"
          />
        </div>
        <div className="country">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            value={country}
            onChange={handleChange}
            className="specialInput"
          />
        </div>
        <div className="city">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={city}
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

export default function PracticalExperience({ positions, set }) {
  const addPosition = () => {
    set((prevState) => ({
      ...prevState,
      practicalExperience: {
        ...prevState.practicalExperience,
        positions: [
          ...prevState.practicalExperience.positions,
          {
            companyName: "",
            positionTitle: "",
            description: "",
            startDate: "",
            endDate: "",
          },
        ],
      },
    }));
  };
  return (
    <div className="PracticalExperience">
      <p className="PracticalExperienceTitle">Practical Experience</p>
      <Positions positions={positions} set={set} />
      <div className="addPosition" onClick={addPosition}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#448fed"
        >
          <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
        </svg>
        <button>Add one more position</button>
      </div>
    </div>
  );
}
