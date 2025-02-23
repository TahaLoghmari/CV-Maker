/* eslint-disable react/prop-types */

export default function TechnicalSkills({
  languages,
  frameworks,
  developerTools,
  libraries,
  others,
  set,
}) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-t-lg rounded-b-lg bg-white p-7">
      <p className="text-xl font-extrabold">Technical Skills</p>
      <div className="flex flex-col flex-wrap justify-between gap-4 md:flex-row">
        <div className="w-full md:w-[48%]">
          {languages.map((language, index) => (
            <div className="flex flex-col gap-3" key={index}>
              <label htmlFor={`language-${index}`} className="text-gray-600">
                Languages
              </label>
              <input
                type="text"
                name="language"
                id={`language-${index}`}
                className="h-10 w-full rounded-md bg-gray-100 p-2 placeholder:text-gray-600"
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
        <div className="w-full md:w-[48%]">
          {frameworks.map((framework, index) => (
            <div className="flex flex-col gap-3" key={index}>
              <label htmlFor={`framework-${index}`} className="text-gray-600">
                Frameworks
              </label>
              <input
                type="text"
                name="framework"
                id={`framework-${index}`}
                className="h-10 w-full rounded-md bg-gray-100 p-2 placeholder:text-gray-600"
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
        <div className="w-full md:w-[48%]">
          {developerTools.map((developerTool, index) => (
            <div className="flex flex-col gap-3" key={index}>
              <label
                htmlFor={`developerTool-${index}`}
                className="text-gray-600"
              >
                Developer Tools
              </label>
              <input
                type="text"
                name="developerTool"
                id={`developerTool-${index}`}
                className="h-10 w-full rounded-md bg-gray-100 p-2 placeholder:text-gray-600"
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
        <div className="w-full md:w-[48%]">
          {libraries.map((library, index) => (
            <div className="flex flex-col gap-3" key={index}>
              <label htmlFor={`library-${index}`} className="text-gray-600">
                Libraries
              </label>
              <input
                type="text"
                name="library"
                id={`library-${index}`}
                className="h-10 w-full rounded-md bg-gray-100 p-2 placeholder:text-gray-600"
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
        <div className="w-full md:w-[48%]">
          {others.map((other, index) => (
            <div className="flex flex-col gap-3" key={index}>
              <label htmlFor={`other-${index}`} className="text-gray-600">
                Others
              </label>
              <input
                type="text"
                name="other"
                id={`other-${index}`}
                className="h-10 w-full rounded-md bg-gray-100 p-2 placeholder:text-gray-600"
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
