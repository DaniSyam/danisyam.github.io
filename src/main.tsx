import { RouterProvider, createHashRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "@/pages/Home.tsx";
import About from "@/pages/About.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);