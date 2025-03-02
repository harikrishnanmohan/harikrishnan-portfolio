import { useContext, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import html_5 from "../../assets/html_5.svg";
import react from "../../assets/react.svg";
import javascript from "../../assets/javascript.svg";
import typescript from "../../assets/typescript.svg";
import css from "../../assets/css.svg";
import sass from "../../assets/sass.svg";

import white_arrow_with_outline from "../../assets/white_arrow_with_outline.png";

gsap.registerPlugin(ScrollTrigger);

import "./ShortAbout.scss";

import { HarikrishnanContext } from "../../context/harikrishnan-context";

const ShortAbout = () => {
  const { main } = useContext(HarikrishnanContext);
  const component = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const text1 = new SplitType(".shortAbout__intro_content_data", {
      types: "words, chars",
    });
    let ctx = gsap.context(() => {
      gsap.from([text1.chars], {
        scrollTrigger: {
          trigger: ".char",
          start: "top 85%",
          end: "top 35%",
          markers: false,
          scrub: true,
        },
        opacity: 0.1,
        stagger: 0.1,
        duration: 1,
      });
      gsap.to(".shortAbout__intro_content_techStack_icon", {
        scrollTrigger: {
          trigger: ".shortAbout__intro_content_techStack_icon",
          start: "top 85%",
          end: "top 50%",
          markers: false,
          scrub: true,
        },
        stagger: 0.1,
        opacity: 1,
        duration: 1,
      });
      return () => ctx.revert();
    }, component);
  });

  return (
    <div className="shortAbout__container" ref={component}>
      <section id="about" className="section"></section>
      <div className="shortAbout">
        {/* <Heading>
          <span className="section__number">01</span>
          <span>{aboutHeading}</span>
          <span className="section__number">01</span>
        </Heading> */}
        <div className="shortAbout__intro">
          <div className="shortAbout__intro_content">
            <p className="shortAbout__intro_content_data">
              {main?.shortBioPartOne}
            </p>
            <p className="shortAbout__intro_content_data">
              {main?.shortBioPartTwo}
            </p>
            <div className="shortAbout__intro_content_techStack">
              <img
                className="shortAbout__intro_content_techStack_icon"
                src={react}
                alt="recat"
              />
              <img
                className="shortAbout__intro_content_techStack_icon"
                src={javascript}
                alt="java script"
              />
              <img
                className="shortAbout__intro_content_techStack_icon"
                src={typescript}
                alt="type script"
              />
              <img
                className="shortAbout__intro_content_techStack_icon"
                src={html_5}
                alt="html 5"
              />
              <img
                className="shortAbout__intro_content_techStack_icon"
                src={css}
                alt="css"
              />
              <img
                className="shortAbout__intro_content_techStack_icon"
                src={sass}
                alt="sass"
              />
            </div>
            <div className="shortAbout__intro_content_learnMore">
              <img
                className="shortAbout__intro_content_learnMore_arrow"
                src={white_arrow_with_outline}
                alt="right arrow"
                onClick={() => navigate("/about")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShortAbout;
