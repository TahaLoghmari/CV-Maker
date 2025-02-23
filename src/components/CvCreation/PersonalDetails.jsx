/* eslint-disable react/prop-types */
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
    <div className="mb-2 flex max-w-full flex-col gap-4 rounded-t-lg rounded-b-lg bg-white p-7">
      <p className="text-xl font-extrabold">Personal Details</p>
      <div className="flex flex-col flex-wrap justify-between gap-3 md:flex-row">
        <div className="flex w-full flex-col gap-3 md:w-[49%] lg:w-[48%]">
          <label htmlFor="firstName" className="text-gray-600">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handleChange}
            className="h-10 w-full rounded-md bg-gray-100 p-2 placeholder:text-gray-600"
          />
        </div>
        <div className="flex flex-col gap-3 md:w-[49%] lg:w-[48%]">
          <label htmlFor="lastName" className="text-gray-600">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleChange}
            className="h-10 w-full rounded-md bg-gray-100 p-2 placeholder:text-gray-600"
          />
        </div>
        <div className="flex flex-col gap-3 md:w-[49%] lg:w-[48%]">
          <label htmlFor="email" className="text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            className="h-10 w-full rounded-md bg-gray-100 p-2 placeholder:text-gray-600"
          />
        </div>
        <div className="flex flex-col gap-3 md:w-[49%] lg:w-[48%]">
          <label htmlFor="phone" className="text-gray-600">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={phone}
            onChange={handleChange}
            className="h-10 w-full rounded-md bg-gray-100 p-2 placeholder:text-gray-600"
          />
        </div>
        <div className="flex flex-col gap-3 md:w-[49%] lg:w-[48%]">
          <label htmlFor="linkedIn" className="text-gray-600">
            LinkedIn
          </label>
          <input
            type="text"
            name="linkedIn"
            id="linkedIn"
            value={linkedIn}
            onChange={handleChange}
            className="h-10 w-full rounded-md bg-gray-100 p-2 placeholder:text-gray-600"
          />
        </div>
        <div className="flex flex-col gap-3 md:w-[49%] lg:w-[48%]">
          <label htmlFor="github" className="text-gray-600">
            Github
          </label>
          <input
            type="text"
            name="github"
            id="github"
            value={github}
            onChange={handleChange}
            className="h-10 w-full rounded-md bg-gray-100 p-2 placeholder:text-gray-600"
          />
        </div>
        <div className="flex flex-col gap-3 md:w-[49%] lg:w-[48%]">
          <label htmlFor="portfolio" className="text-gray-600">
            Portfolio
          </label>
          <input
            type="text"
            name="portfolio"
            id="portfolio"
            value={portfolio}
            onChange={handleChange}
            className="h-10 w-full rounded-md bg-gray-100 p-2 placeholder:text-gray-600"
          />
        </div>
      </div>
    </div>
  );
}
