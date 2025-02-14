/* eslint-disable react/prop-types */
import "../../styles/CertificatesAchievementsCV.css";
export default function CertificatesAchievementsCV({ description }) {
  return (
    <div className="CertificatesAchievementsCV">
      <div className="CertificatesAchievementsCVTitle">
        C
        <span className="CertificatesAchievementsCVTitleRest">ERTIFICATES</span>{" "}
        / A
        <span className="CertificatesAchievementsCVTitleRest">CHIEVEMENTS</span>
      </div>
      <div
        className="PracticalExperiencedescription"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
