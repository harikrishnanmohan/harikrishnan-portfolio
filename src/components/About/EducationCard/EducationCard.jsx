import { useLayoutEffect, useRef } from "react";
import "./EducationCard.scss";

const EducationCard = ({
  className,
  degree,
  school,
  graduated,
  description,
  id,
}) => {
  return (
    <div className={className} id={id}>
      <div className={`${className}_item`}>
        <h4 className={`${className}_item_title`}>{degree}</h4>
        <p className={`${className}_item_content`}>{school}</p>
        <p className={`${className}_item_content`}>{graduated}</p>
        <p className={`${className}_item_content`}>{description}</p>
      </div>
    </div>
  );
};

export default EducationCard;
