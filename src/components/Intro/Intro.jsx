import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

import "./Intro.scss";
import { HarikrishnanContext } from "../../context/harikrishnan-context";
import ShortAbout from "../ShortAbout/ShortAbout";
import ShortProjects from "../ShortProjects/ShortProjects";
import ContactMe from "../ContactMe/ContactMe";

const Intro = () => {
  const { main } = useContext(HarikrishnanContext);
  const intro = main?.intro;
  const component = useRef(null);

  useLayoutEffect(() => {
    gsap.set(".intro__container", { opacity: 0, visibility: "hidden" });
    gsap.to(".intro__container", {
      opacity: 1,
      visibility: "visible",
      duration: 1,
      ease: "power2.out",
    });
  }, []);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const intro = new SplitType(".intro__word", { type: "char" });
      const tag = new SplitType(".intro__tagLine_parts", { type: "chars" });
      const t1 = gsap.timeline();
      t1.from(intro.chars, {
        y: 100,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.5,
        opacity: 0,
      }).from(tag.chars, {
        y: 10,
        stagger: 0.01,
        delay: 0.2,
        duration: 0.5,
        opacity: 0,
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div className="intro__container" ref={component}>
      <div className="intro">
        <div className="intro__words">
          <div className="intro__word">{intro[0]}</div>
          <div className="intro__word">{intro[1]}</div>
        </div>
        <div className="intro__tag">
          <div className="intro__tagLine">
            <div className="intro__tagLine_parts">{main?.tagline[0]}</div>
            <div className="intro__tagLine_parts">{main?.tagline[1]}</div>
          </div>
        </div>
      </div>
      <ShortAbout />
      <ShortProjects />
      <ContactMe />
    </div>
  );
};

export default Intro;
