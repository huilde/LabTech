import React from "react";
import ReactDOM from "react-dom/client";

import Inicio from "../src/pages/Inicio";
import Trilha from "./pages/Trilha";
import Atividades from "./pages/Atividades";
import Perfil from "./pages/Perfil";
import Login from "./pages/Login";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/inicio",
    element: <Inicio />,
  },
  {
    path: "/trilha",
    element: <Trilha />,
  },
  {
    path: "/atividades",
    element: <Atividades />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
  },
  {
    path: "/",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
