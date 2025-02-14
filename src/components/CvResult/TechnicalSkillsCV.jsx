/* eslint-disable react/prop-types */
import "../../styles/TechnicalSkillsCV.css";
export default function TechnicalSkillsCV({
  languages,
  frameworks,
  developerTools,
  libraries,
  others,
}) {
  return (
    <div className="TechnicalSkillsCV">
      <div className="TechnicalSkillsCVTitle">
        T<span className="TechnicalSkillsTitleCVRest">ECHNICAL</span> S
        <span className="TechnicalSkillsTitleCVRest">KILLS</span>
      </div>
      <div className="TechnicalSkillCVContent">
        <div className="languagesCV blockCV">
          <p className="blockTitle">Languages : </p>
          <p> {languages}</p>
        </div>
        <div className="frameworksCV blockCV">
          <p className="blockTitle">Frameworks : </p>
          <p> {frameworks}</p>
        </div>
        <div className="developerToolsCV blockCV">
          <p className="blockTitle">Developer Tools : </p>
          <p> {developerTools}</p>
        </div>
        <div className="librariesCV blockCV">
          <p className="blockTitle">Libraries : </p>
          <p> {libraries}</p>
        </div>
        <div className="othersCV blockCV">
          <p className="blockTitle">Others : </p>
          <p> {others}</p>
        </div>
      </div>
    </div>
  );
}
