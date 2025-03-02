import { useContext, useEffect, useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import EducationCard from "./EducationCard/EducationCard";

import html_5 from "../../assets/html_5.svg";
import react from "../../assets/react.svg";
import javascript from "../../assets/javascript.svg";
import typescript from "../../assets/typescript.svg";
import css from "../../assets/css.svg";
import sass from "../../assets/sass.svg";

import hari from "../../assets/hari.jpg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

import "./About.scss";
import { HarikrishnanContext } from "../../context/harikrishnan-context";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { main, resume } = useContext(HarikrishnanContext);
  const component = useRef(null);

  useEffect(() => {
    window.scroll(0, 0);
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      const text1 = new SplitType(".about__intro_content_data", {
        types: "words, chars",
      });
      t1.from([text1.chars], {
        stagger: 0.015,
        opacity: 0,
      }).to(".about__techStack_icon", {
        stagger: 0.1,
        opacity: 1,
        duration: 1,
      });

      return () => ctx.revert();
    }, [component]);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const title = new SplitType(".education__title", { type: "chars" });

      gsap.from(title.chars, {
        scrollTrigger: {
          trigger: ".education__title",
          start: "top 80%",
          end: "top 70%",
          toggleActions: "play play revert revert",
          markers: false,
          scrub: true,
        },
        opacity: 0,
        stagger: 0.1,
      });

      const contact = new SplitType(".contact__title", { type: "chars" });
      gsap.from(contact.chars, {
        scrollTrigger: {
          trigger: ".contact__title",
          start: "top 80%",
          end: "top 70%",
          toggleActions: "play play revert revert",
          markers: false,
          scrub: true,
        },
        opacity: 0,
        stagger: 0.1,
      });

      const t1 = gsap.timeline();
      t1.to("#education__content_one", {
        opacity: 1,
        stagger: 0.1,
        // xPercent: 100,
        delay: 1,
        scrollTrigger: {
          trigger: ".education__content",
          start: "top 80%",
          end: "bottom 70%",
          markers: false,
          scrub: true,
        },
      })
        .to("#education__content_two", {
          opacity: 1,
          stagger: 0.1,
          // xPercent: -100,
          delay: 1,
          scrollTrigger: {
            trigger: ".education__content",
            start: "top 80%",
            end: "bottom 70%",
            markers: false,
            scrub: true,
          },
        })
        .to(".contact__content", {
          opacity: 1,
          stagger: 0.1,
          // xPercent: -100,
          delay: 1,
          scrollTrigger: {
            trigger: ".contact__content",
            start: "top 80%",
            end: "top 70%",
            markers: false,
            scrub: true,
          },
        });
      return () => ctx.revert();
    }, component);
  }, []);

  return (
    <div className="about__container" ref={component}>
      <div className="about">
        <div className="about__intro">
          {/* <div className="about__intro_profilePic">
            <img
              className="about__intro_profilePic_pic"
              src={hari}
              alt="profile pic"
            />
          </div> */}
          <div className="about__intro_content">
            <p className="about__intro_content_data">{main?.bioPartOne}</p>
            <p className="about__intro_content_data">{main?.bioPartTwo}</p>
            <p className="about__intro_content_data">{main?.bioPartThree}</p>
            <p className="about__intro_content_data">{main?.myExpertise}</p>
            <div className="about__techStack">
              <img className="about__techStack_icon" src={react} alt="recat" />
              <img
                className="about__techStack_icon"
                src={javascript}
                alt="java script"
              />
              <img
                className="about__techStack_icon"
                src={typescript}
                alt="type script"
              />
              <img
                className="about__techStack_icon"
                src={html_5}
                alt="html 5"
              />
              <img className="about__techStack_icon" src={css} alt="css" />
              <img className="about__techStack_icon" src={sass} alt="sass" />
            </div>
          </div>
        </div>
      </div>
      <div className="education">
        <div className="education__title">{resume.educationTitle}</div>
        <div className="education__details">
          <EducationCard
            className="education__content"
            id="education__content_one"
            degree={resume.education[0].degree}
            graduated={resume.education[0].graduated}
            description={resume.education[0].description}
            school={resume.education[0].school}
          />
          <EducationCard
            className="education__content"
            id="education__content_two"
            degree={resume.education[1].degree}
            graduated={resume.education[1].graduated}
            description={resume.education[1].description}
            school={resume.education[1].school}
          />
        </div>
      </div>
      <div className="contact">
        <div className="contact__title">{main.contact}</div>
        <div className="contact__content">
          <p className="contact__content_item_name">{main.name}</p>
          <p className="contact__content_item">{main.email}</p>
          <p className="contact__content_item">{main.phone}</p>
          <div className="contact__content_item_social">
            <div>{main.contactmessage}</div>
            <div className="contact__content_item_social_icons">
              <a
                href={main.social[1].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a
                href={main.social[0].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="facebook" />
              </a>
              <a
                href={main.social[2].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="instagram" />
              </a>
              <a
                href={main.social[3].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
