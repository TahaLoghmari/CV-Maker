/* eslint-disable react/prop-types */
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
    <div className="mb-2 flex w-full flex-col gap-4 rounded-t-lg rounded-b-lg bg-white p-7">
      <p className="text-xl font-extrabold">Certificates / Achievements</p>
      <div className="flex w-full flex-col gap-2">
        <label htmlFor="certificatesAndAchievements" className="text-gray-600">
          Description
        </label>
        <ReactQuill
          value={description}
          onChange={handleDescriptionChange}
          theme="snow"
          className="w-full rounded-md bg-gray-100 p-2"
        />
      </div>
    </div>
  );
}
