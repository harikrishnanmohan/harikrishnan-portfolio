import { useContext, useEffect, useState } from "react";
import "./project.scss";

import { HarikrishnanContext } from "../../context/harikrishnan-context";
import { useSlider } from "../../hooks/useSlider";

const Project = () => {
  const { projects } = useContext(HarikrishnanContext);
  const {
    activeIndex,
    isSliding,
    slideShowImages,
    handleMouseEnter,
    handleMouseLeave,
  } = useSlider();

  return (
    <div className="project">
      {projects.map((item) => (
        <div
          className="project__item"
          key={item?.title}
          onClick={() => window.open(item.url, "_blank")}
          onMouseEnter={() => handleMouseEnter(item.images)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="project__item_slider">
            <div
              className="project__item_sliderTrack"
              style={{
                transform:
                  isSliding && slideShowImages === item.images
                    ? `translateX(-${activeIndex * 100}%)`
                    : "translateX(0)",
                transition: isSliding ? "transform 0.6s ease-in-out" : "none",
              }}
            >
              {item.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className={`project__item_image ${
                    !isSliding ? "wiggle-animation" : ""
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="project__item_title">{item?.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Project;
