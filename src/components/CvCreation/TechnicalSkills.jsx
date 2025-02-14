/* eslint-disable react/prop-types */
import "../../styles/TechnicalSkills.css";

export default function TechnicalSkills({
  languages,
  frameworks,
  developerTools,
  libraries,
  others,
  set,
}) {
  return (
    <div className="technicalSkills">
      <p className="technicalSkillsTitle">Technical Skills</p>
      <div className="content">
        <div className="languages">
          {languages.map((language, index) => (
            <div className="language" key={index}>
              <label htmlFor={`language-${index}`}>Languages</label>
              <input
                type="text"
                name="language"
                id={`language-${index}`}
                value={language}
                onChange={(e) => {
                  const newLanguages = [...languages];
                  newLanguages[index] = e.target.value;
                  set((prevState) => ({
                    ...prevState,
                    technicalSkills: {
                      ...prevState.technicalSkills,
                      languages: newLanguages,
                    },
                  }));
                }}
              />
            </div>
          ))}
        </div>
        <div className="frameworks">
          {frameworks.map((framework, index) => (
            <div className="framework" key={index}>
              <label htmlFor={`framework-${index}`}>Frameworks</label>
              <input
                type="text"
                name="framework"
                id={`framework-${index}`}
                value={framework}
                onChange={(e) => {
                  const newFrameworks = [...frameworks];
                  newFrameworks[index] = e.target.value;
                  set((prevState) => ({
                    ...prevState,
                    technicalSkills: {
                      ...prevState.technicalSkills,
                      frameworks: newFrameworks,
                    },
                  }));
                }}
              />
            </div>
          ))}
        </div>
        <div className="developerTools">
          {developerTools.map((developerTool, index) => (
            <div className="developerTool" key={index}>
              <label htmlFor={`developerTool-${index}`}>Developer Tools</label>
              <input
                type="text"
                name="developerTool"
                id={`developerTool-${index}`}
                value={developerTool}
                onChange={(e) => {
                  const newDeveloperTools = [...developerTools];
                  newDeveloperTools[index] = e.target.value;
                  set((prevState) => ({
                    ...prevState,
                    technicalSkills: {
                      ...prevState.technicalSkills,
                      developerTools: newDeveloperTools,
                    },
                  }));
                }}
              />
            </div>
          ))}
        </div>
        <div className="libraries">
          {libraries.map((library, index) => (
            <div className="library" key={index}>
              <label htmlFor={`library-${index}`}>Libraries</label>
              <input
                type="text"
                name="library"
                id={`library-${index}`}
                value={library}
                onChange={(e) => {
                  const newLibraries = [...libraries];
                  newLibraries[index] = e.target.value;
                  set((prevState) => ({
                    ...prevState,
                    technicalSkills: {
                      ...prevState.technicalSkills,
                      libraries: newLibraries,
                    },
                  }));
                }}
              />
            </div>
          ))}
        </div>
        <div className="others">
          {others.map((other, index) => (
            <div className="other" key={index}>
              <label htmlFor={`other-${index}`}>Others</label>
              <input
                type="text"
                name="other"
                id={`other-${index}`}
                value={other}
                onChange={(e) => {
                  const newOthers = [...others];
                  newOthers[index] = e.target.value;
                  set((prevState) => ({
                    ...prevState,
                    technicalSkills: {
                      ...prevState.technicalSkills,
                      others: newOthers,
                    },
                  }));
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
