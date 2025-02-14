/* eslint-disable react/prop-types */
import "../../styles/EducationalExperienceCv.css";
function Educations({ educations }) {
  return educations.map((education, index) => (
    <Education
      schoolName={education.schoolName}
      degree={education.degree}
      startDate={education.startDate}
      endDate={education.endDate}
      key={index}
    />
  ));
}
function Education({ schoolName, degree, startDate, endDate }) {
  return (
    <div className="education">
      <p className="schoolNameCV">{schoolName}</p>
      <div className="secondLine">
        <p>{degree}</p>
        <div className="degreeDate">
          <p>{startDate && endDate ? `${startDate} - ${endDate}` : ""}</p>
        </div>
      </div>
    </div>
  );
}
export default function EducationalExperienceCV({ educations }) {
  return (
    <div className="educationExperienceCv">
      <div className="eduTitle">
        E<span className="eduTitleRest">DUCATION</span>
      </div>
      <Educations educations={educations} />
    </div>
  );
}
