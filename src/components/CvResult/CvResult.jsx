/* eslint-disable react/prop-types */
import "../../styles/cvResult.css";
import PersonalDetailsCV from "./PersonalDetailsCV";
import EducationalExperienceCV from "./EducationalExperienceCV";
import PracticalExperienceCV from "./PracticalExperienceCV";
import ProjectsCV from "./ProjectsCV";
import CertificatesAchievementsCV from "./CertificatesAchievementsCV";
import TechnicalSkillsCV from "./TechnicalSkillsCV";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export default function CvResult({ info }) {
  const {
    personalDetails,
    educationalExperience,
    practicalExperience,
    projects,
    certificatesAndAchievements,
    technicalSkills,
  } = info;
  const componentRef = useRef();

  const handleDownloadPdf = async () => {
    if (!componentRef.current) {
      console.error("Target element not found!");
      return;
    }
    const canvas = await html2canvas(componentRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", "letter");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("cv.pdf");
  };
  return (
    <div className="cvResult">
      <button className="PDF" onClick={handleDownloadPdf}>
        Download PDF
      </button>
      <div ref={componentRef} className="cvContainer">
        <PersonalDetailsCV
          firstName={personalDetails.firstName}
          lastName={personalDetails.lastName}
          email={personalDetails.email}
          phone={personalDetails.phone}
          linkedIn={personalDetails.linkedIn}
          github={personalDetails.github}
          portfolio={personalDetails.portfolio}
        />
        <div className="mainInformations">
          <EducationalExperienceCV educations={educationalExperience} />
          <PracticalExperienceCV positions={practicalExperience.positions} />
          <ProjectsCV projects={projects} />
          <CertificatesAchievementsCV
            description={certificatesAndAchievements}
          />
          <TechnicalSkillsCV
            languages={technicalSkills.languages}
            frameworks={technicalSkills.frameworks}
            developerTools={technicalSkills.developerTools}
            libraries={technicalSkills.libraries}
            others={technicalSkills.others}
          />
        </div>
      </div>
    </div>
  );
}
