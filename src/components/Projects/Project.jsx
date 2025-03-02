import { useContext } from "react";
import "./project.scss";

import { HarikrishnanContext } from "../../context/harikrishnan-context";

const Project = () => {
  const { projects } = useContext(HarikrishnanContext);
  return (
    <div className="project">
      {projects.map((item) => {
        return (
          <div
            className="project__item"
            key={item?.title}
            onClick={() => window.open(item.url, "_blank")}
          >
            <img src={item.image} alt="" className="project__item_image" />
            {item?.title}
          </div>
        );
      })}
    </div>
  );
};

export default Project;
