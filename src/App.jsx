import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import gsap from "gsap";
import "./App.scss";
import { HarikrishnanProvider } from "./context/harikrishnan-context";
import data from "./harikrishnanMohan.json";
import Main from "./components/Main/Main";
import Intro from "./components/Intro/Intro";
import CustomCursor from "./components/Cursor/Cursor";
import Project from "./components/Projects/Project";
import About from "./components/About/About";
import ContactMe from "./components/ContactMe/ContactMe";
import Loader from "./components/Loader/Loader";

function App() {
  const [counter, setCounter] = useState(0);
  const componentRef = useRef(null);

  const router = createBrowserRouter([
    {
      path: "/harikrishnan-portfolio",
      element: <Main />,
      children: [
        { path: "/harikrishnan-portfolio", element: <Intro /> },
        { path: "/harikrishnan-portfolio/projects", element: <Project /> },
        { path: "/harikrishnan-portfolio/about", element: <About /> },
        { path: "/harikrishnan-portfolio/contact", element: <ContactMe /> },
      ],
    },
  ]);

  useEffect(() => {
    if (counter >= 100) return;

    const intervalId = setInterval(() => {
      setCounter((prev) => Math.min(prev + 4, 100));
    }, 100);

    return () => clearInterval(intervalId);
  }, [counter]);

  useLayoutEffect(() => {
    if (counter < 100) return;
    gsap.set(".app__container", { opacity: 0, visibility: "hidden" });
    gsap.to(".app__container", {
      opacity: 1,
      visibility: "visible",
      duration: 1.5,
      ease: "power2.out",
    });
  }, [counter]);

  if (counter < 100) return <Loader counter={counter} />;

  return (
    <HarikrishnanProvider initialValue={data}>
      <CustomCursor />
      <div className="app__container" ref={componentRef}>
        <RouterProvider router={router} />
      </div>
    </HarikrishnanProvider>
  );
}

export default App;
