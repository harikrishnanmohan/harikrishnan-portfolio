import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import { HarikrishnanProvider } from "./context/harikrishnan-context";
import data from "./harikrishnanMohan.json";
import Main from "./components/Main/Main";
import Intro from "./components/Intro/Intro";

function App() {
  const router = createBrowserRouter([
    {
      path: "/harikrishnanmohan",
      element: <Main />,
      children: [
        {
          path: "/harikrishnanmohan",
          element: <Intro />,
        },
      ],
    },
  ]);

  return (
    <HarikrishnanProvider initialValue={data}>
      <RouterProvider router={router} />
    </HarikrishnanProvider>
  );
}

export default App;
