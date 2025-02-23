/* eslint-disable react/prop-types */
import PersonalDetailsCV from "./PersonalDetailsCV";
import EducationalExperienceCV from "./EducationalExperienceCV";
import PracticalExperienceCV from "./PracticalExperienceCV";
import ProjectsCV from "./ProjectsCV";
import CertificatesAchievementsCV from "./CertificatesAchievementsCV";
import TechnicalSkillsCV from "./TechnicalSkillsCV";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export default function CvResult({ info, toggle }) {
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
    <div
      className={
        toggle
          ? "hidden xl:flex xl:h-full xl:w-1/2 xl:flex-col xl:items-center xl:justify-center"
          : "flex h-full w-full flex-col items-center justify-center gap-4 bg-gray-400 xl:w-1/2"
      }
    >
      <button
        className="cursor-pointer rounded-md bg-sky-400 p-2 text-white hover:bg-sky-500"
        onClick={handleDownloadPdf}
      >
        Download PDF
      </button>
      <div ref={componentRef} className="h-[85%] w-[65%] rounded-md bg-white">
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
