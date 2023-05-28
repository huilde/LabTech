import React, { createContext } from "react";

const Context = createContext([
  { nome: "huilde", sobrenome: "viana" },
  () => {},
]);

export { Context };
