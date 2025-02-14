import { useState } from "react";
import CvCreation from "./CvCreation/CvCreation";
import "../styles/App.css";
import CvResult from "./CvResult/CvResult";

export default function App() {
  const [cvInformations, setCvInformations] = useState({
    personalDetails: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      linkedIn: "",
      github: "",
      portfolio: "",
    },
    educationalExperience: [
      {
        schoolName: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ],
    practicalExperience: {
      positions: [
        {
          companyName: "",
          positionTitle: "",
          company: "",
          city: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    },
    projects: [
      {
        projectName: "",
        projectLanguages: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    certificatesAndAchievements: "",
    technicalSkills: {
      languages: [""],
      frameworks: [""],
      developerTools: [""],
      libraries: [""],
      others: [""],
    },
  });
  return (
    <>
      <CvCreation info={cvInformations} set={setCvInformations} />
      <CvResult info={cvInformations} />
    </>
  );
}
