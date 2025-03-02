import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import "./Loader.scss";

const Loader = ({ counter }) => {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(".loading", {
        yPercent: "-100",
        delay: 0.3,
        duration: 0.7,
      })
        .from([".loading__content", ".loading__percentage"], {
          opacity: 0,
          stagger: 0.2,
          y: "+=30",
        })
        .to(".loading__content", {
          opacity: 0,
          x: "-=50",
        })
        .to(".loading__percentage", {
          opacity: 0,
          x: "+=50",
        })
        .to(".loading", {
          xPercent: "-100",
          duration: 0.6,
        });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={component}>
      <div className="loading">
        <div className="loading__content">loading...</div>
        <div className="loading__percentage">{counter}%</div>
      </div>
    </div>
  );
};

export default Loader;
