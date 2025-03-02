import { useContext } from "react";

import white_arrow_with_outline from "../../assets/white_arrow_with_outline.png";

import "./ShortProjects.scss";

import { useNavigate } from "react-router-dom";
import { HarikrishnanContext } from "../../context/harikrishnan-context";

const ShortProjects = () => {
  const { projects } = useContext(HarikrishnanContext);
  const navigate = useNavigate();

  return (
    <>
      <section id="projects" className="section"></section>
      <div className="shortProjects__container">
        <div className="shortProjects__content">
          <div className="shortProjects__projects">
            {projects.map((item) => {
              return (
                <div
                  className="shortProjects__projects_project"
                  key={item?.title}
                  onClick={() => window.open(item.url, "_blank")}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="shortProjects__projects_project-image"
                  />
                  {item?.title}
                </div>
              );
            })}
            <div
              className="shortProjects__projects__learnMore_content"
              onClick={() => navigate("/harikrishnan-portfolio/projects")}
            >
              <img
                className="shortProjects__projects__learnMore_arrow"
                src={white_arrow_with_outline}
                alt="right arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortProjects;
