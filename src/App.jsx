import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import { HarikrishnanProvider } from "./context/harikrishnan-context";
import data from "./harikrishnanMohan.json";
import Main from "./components/Main/Main";
import Intro from "./components/Intro/Intro";
import CustomCursor from "./components/Cursor/Cursor";
import Project from "./components/Projects/Project";
import About from "./components/About/About";
import ContactMe from "./components/ContactMe/ContactMe";
import { useLayoutEffect, useRef, useState } from "react";
import Loader from "./components/Loader/Loader";
import gsap from "gsap";

function App() {
  const router = createBrowserRouter([
    {
      path: "/harikrishnan-portfolio",
      element: <Main />,
      children: [
        {
          path: "/harikrishnan-portfolio",
          element: <Intro />,
        },
        {
          path: "/harikrishnan-portfolio/projects",
          element: <Project />,
        },
        {
          path: "/harikrishnan-portfolio/about",
          element: <About />,
        },
        {
          path: "/harikrishnan-portfolio/contact",
          element: <ContactMe />,
        },
      ],
    },
  ]);

  const [counter, setCounter] = useState(0);
  const component = useRef(null);

  const counterValid = counter < 100;
  useLayoutEffect(() => {
    const intervalId =
      counterValid && setInterval(() => setCounter((t) => t + 4), 100);
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(".app__container", {
        opacity: 0,
        duration: 2,
      });
    }, component);

    return () => {
      clearInterval(intervalId);
      () => ctx.revert();
    };
  }, [counterValid]);

  if (counter < 100) return <Loader counter={counter} />;

  return (
    <HarikrishnanProvider initialValue={data}>
      <CustomCursor />
      <div className="app__container">
        <RouterProvider router={router} />
      </div>
    </HarikrishnanProvider>
  );
}

export default App;
