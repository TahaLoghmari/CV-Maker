/* eslint-disable react/prop-types */
import "../../styles/CertificatesAchievements.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export default function CertificatesAchievements({ description, set }) {
  const handleDescriptionChange = (value) => {
    set((prevState) => {
      return {
        ...prevState,
        certificatesAndAchievements: value,
      };
    });
  };
  return (
    <div className="certificateAchievements">
      <p className="certificateAchievementsTitle">
        Certificates / Achievements
      </p>
      <div className="content">
        <label htmlFor="certificatesAndAchievements">Description</label>
        <ReactQuill
          value={description}
          onChange={handleDescriptionChange}
          theme="snow"
        />
      </div>
    </div>
  );
}
