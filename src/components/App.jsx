import { useState } from "react";
import CvCreation from "./CvCreation/CvCreation";
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
  let [toggle, setToggle] = useState(true);
  let togglePages = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <CvCreation
        info={cvInformations}
        set={setCvInformations}
        toggle={toggle}
      />
      <CvResult info={cvInformations} toggle={toggle} />
      <div
        className="fixed right-3 bottom-3 flex cursor-pointer gap-2 rounded-3xl bg-sky-500 p-4 font-bold text-white xl:hidden"
        onClick={togglePages}
      >
        <p>Preview & Download </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="currentColor"
        >
          <path d="M336-240h288v-72H336v72Zm0-144h288v-72H336v72ZM263.72-96Q234-96 213-117.15T192-168v-624q0-29.7 21.15-50.85Q234.3-864 264-864h312l192 192v504q0 29.7-21.16 50.85Q725.68-96 695.96-96H263.72ZM528-624h168L528-792v168Z" />
        </svg>
      </div>
    </>
  );
}
