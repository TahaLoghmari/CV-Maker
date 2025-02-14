/* eslint-disable react/prop-types */
import PersonalDetails from "./PersonalDetails";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";
import Projects from "./Projects";
import CertificatesAchievements from "./CertificatesAchievements";
import TechnicalSkills from "./TechnicalSkills";
import "../../styles/cvCreation.css";
export default function CvCreation({ info, set }) {
  const {
    personalDetails,
    educationalExperience,
    practicalExperience,
    projects,
    certificatesAndAchievements,
    technicalSkills,
  } = info;
  return (
    <div className="cvCreation">
      <PersonalDetails
        firstName={personalDetails.firstName}
        lastName={personalDetails.lastName}
        email={personalDetails.email}
        phone={personalDetails.phone}
        linkedIn={personalDetails.linkedIn}
        github={personalDetails.github}
        portfolio={personalDetails.portfolio}
        set={set}
      />
      <EducationalExperience educations={educationalExperience} set={set} />
      <PracticalExperience
        positions={practicalExperience.positions}
        set={set}
      />
      <Projects projects={projects} set={set} />
      <CertificatesAchievements
        description={certificatesAndAchievements}
        set={set}
      />
      <TechnicalSkills
        languages={technicalSkills.languages}
        frameworks={technicalSkills.frameworks}
        developerTools={technicalSkills.developerTools}
        libraries={technicalSkills.libraries}
        others={technicalSkills.others}
        set={set}
      />
    </div>
  );
}
