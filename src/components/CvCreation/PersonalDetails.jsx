/* eslint-disable react/prop-types */
import "../../styles/PersonalDetails.css";
export default function PersonalDetails({
  firstName,
  lastName,
  email,
  phone,
  linkedIn,
  github,
  portfolio,
  set,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    set((prevState) => ({
      ...prevState,
      personalDetails: {
        ...prevState.personalDetails,
        [name]: value,
      },
    }));
  };
  return (
    <div className="PersonalDetails">
      <p className="personalDetailsTitle">Personal Details</p>
      <div className="content">
        <div className="firstName ">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div className="lastName">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="phone">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div className="linkedIn">
          <label htmlFor="linkedIn">LinkedIn</label>
          <input
            type="text"
            name="linkedIn"
            id="linkedIn"
            value={linkedIn}
            onChange={handleChange}
          />
        </div>
        <div className="github">
          <label htmlFor="github">Github</label>
          <input
            type="text"
            name="github"
            id="github"
            value={github}
            onChange={handleChange}
          />
        </div>
        <div className="portfolio">
          <label htmlFor="portfolio">Portfolio</label>
          <input
            type="text"
            name="portfolio"
            id="portfolio"
            value={portfolio}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
