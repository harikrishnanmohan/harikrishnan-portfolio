import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Cursor.scss"; // Import your styles

const CustomCursor = () => {
  const bigBall = useRef(null);
  const smallBall = useRef(null);
  const [isMouseDevice, setIsMouseDevice] = useState(false);

  useEffect(() => {
    // Check if the device has a fine pointer (mouse)
    const hasMouse = window.matchMedia("(pointer: fine)").matches;
    setIsMouseDevice(hasMouse);

    if (!hasMouse) return; // If no mouse, do not attach event listeners

    const onMouseMove = (e) => {
      gsap.to(bigBall.current, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.4,
      });
      gsap.to(smallBall.current, {
        x: e.clientX - 5,
        y: e.clientY - 7,
        duration: 0.1,
      });
    };

    document.body.addEventListener("mousemove", onMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  if (!isMouseDevice) return null; // Don't render cursor on touch devices

  return (
    <>
      <div className="cursor">
        <div className="cursor__ball cursor__ball--big" ref={bigBall}>
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12"></circle>
          </svg>
        </div>
        <div className="cursor__ball cursor__ball--small" ref={smallBall}>
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="4"></circle>
          </svg>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
