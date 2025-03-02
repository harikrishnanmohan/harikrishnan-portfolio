import { forwardRef, useContext, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ContactMe.scss";

import { Link } from "react-router-dom";
import { HarikrishnanContext } from "../../context/harikrishnan-context";

gsap.registerPlugin(ScrollTrigger);

const ContactMe = forwardRef((props, ref) => {
  const { contactMe, connectWithMe, write, A, mail, main } =
    useContext(HarikrishnanContext);

  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".contactMe__content", {
        // x: window.innerWidth / 3.4,
        opacity: 1,
        scrollTrigger: {
          trigger: ".contactMe",
          start: "top bottom",
          end: "top 20%",
          scrub: true,
        },
      });
      return () => ctx.revert();
    }, component);
  }, []);

  return (
    <div className="contactMe__container" ref={component} id="contactMe">
      <div className="contactMe__content" ref={ref}>
        <div className="contactMe">
          <div className="contactMe__contactMe">{contactMe}</div>
          <div className="contactMe__connectWithMe">{connectWithMe}</div>
          <Link
            className="contactMe__mail"
            to="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `mailto:${main.email}`;
            }}
          >
            <p>{write}</p>
            <p>{A}</p>
            <p>{mail}</p>
          </Link>
        </div>
      </div>
    </div>
  );
});

ContactMe.displayName = "ContactMe";

export default ContactMe;
