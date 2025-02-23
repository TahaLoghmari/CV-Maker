/* eslint-disable react/prop-types */
function Positions({ positions }) {
  return positions.map((position, index) => (
    <Position
      companyName={position.companyName}
      positionTitle={position.positionTitle}
      country={position.country}
      city={position.city}
      startDate={position.startDate}
      endDate={position.endDate}
      description={position.description}
      key={index}
    />
  ));
}
function Position({
  companyName,
  positionTitle,
  startDate,
  endDate,
  country,
  city,
  description,
}) {
  return (
    <div className="position">
      <div className="header">
        <p className="positionTitle">{positionTitle}</p>
        <p className="startEndDates">
          {startDate && endDate ? `${startDate} - ${endDate}` : ""}
        </p>
      </div>
      <div className="header2">
        <p className="companyName">{companyName}</p>
        <p className="place">{city && country ? `${city} - ${country}` : ""}</p>
      </div>
      <div
        className="PracticalExperiencedescription"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
export default function PracticalExperienceCV({ positions }) {
  return (
    <div className="practicalExperienceCv">
      <div className="practicalExperienceCvTitle">
        E<span className="practicalExperienceCvTitleRest">XPERIENCE</span>
      </div>
      <Positions positions={positions} />
    </div>
  );
}
