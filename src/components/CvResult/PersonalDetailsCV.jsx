/* eslint-disable react/prop-types */
export default function PersonalDetailsCV({
  firstName,
  lastName,
  email,
  phone,
  linkedIn,
  github,
  portfolio,
}) {
  function formatUrl(url) {
    if (url && !url.startsWith("http://") && !url.startsWith("https://")) {
      return `https://${url}`;
    }
    return url;
  }
  return (
    <div className="personalDetailsCv">
      <p className="title">
        {firstName} {lastName}
      </p>
      <div className="informations">
        <p>{phone ? `+${phone} |` : ""}</p>
        <p>{email ? `${email} |` : ""}</p>
        <a href={formatUrl(linkedIn)} target="_blank" rel="noopener noreferrer">
          {linkedIn ? `LinkedIn |` : ""}
        </a>
        <a href={formatUrl(github)} target="_blank" rel="noopener noreferrer">
          {github ? `Github |` : ""}
        </a>
        <a
          href={formatUrl(portfolio)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {portfolio ? `Portfolio` : ""}
        </a>
      </div>
    </div>
  );
}
