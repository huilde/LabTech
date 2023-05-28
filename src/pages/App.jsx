import React, { useState } from "react";

import Inicio from "./Inicio";
import Trilha from "./Trilha";
import Atividades from "./Atividades";
import Perfil from "./Perfil";
import Login from "./Login";
import Perguntas from "./Perguntas";
import { Projeto } from "./Projeto";
import "../index.css";
import "../App.css";
import { Context } from "../Context";
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
  {
    path: "/projeto",
    element: <Projeto />,
  },
  {
    path: "/perguntas",
    element: <Perguntas />,
  },
]);

const App = () => {
  const [profile, setProfile] = useState({
    nome: "huilde",
    sobrenome: "viana",
  });
  return (
    <Context.Provider value={[profile, setProfile]}>
      <RouterProvider router={router} />
    </Context.Provider>
  );
};

export default App;
