import { useContext } from "react";

import white_arrow_with_outline from "../../assets/white_arrow_with_outline.png";

import "./ShortProjects.scss";

import { useNavigate } from "react-router-dom";
import { HarikrishnanContext } from "../../context/harikrishnan-context";
import { useSlider } from "../../hooks/useSlider";

const ShortProjects = () => {
  const { projects } = useContext(HarikrishnanContext);
  const navigate = useNavigate();

  const {
    activeIndex,
    isSliding,
    slideShowImages,
    handleMouseEnter,
    handleMouseLeave,
  } = useSlider();

  return (
    <>
      <section id="projects" className="section"></section>
      <div className="shortProjects__container">
        <div className="shortProjects__content">
          <div className="shortProjects__projects">
            {projects.slice(0, 2).map((item) => {
              return (
                <div
                  className="shortProjects__projects__item"
                  key={item?.title}
                >
                  <div
                    className="shortProjects__projects_project"
                    onClick={() => window.open(item.url, "_blank")}
                    onMouseEnter={() => handleMouseEnter(item.images)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="shortProjects__item_slider">
                      <div
                        className={`shortProjects__item_sliderTrack`}
                        style={{
                          transform:
                            isSliding && slideShowImages === item.images
                              ? `translateX(-${activeIndex * 100}%)`
                              : "translateX(0)",
                          transition: isSliding
                            ? "transform 0.6s ease-in-out"
                            : "none",
                        }}
                      >
                        {item.images.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt=""
                            className={`shortProjects__item_image ${
                              !isSliding ? "wiggle-animation" : ""
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="shortProjects__item_title">
                      {item?.title}
                    </div>
                  </div>
                </div>
              );
            })}
            <div
              className="shortProjects__projects__learnMore_content"
              onClick={() => navigate("/projects")}
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
