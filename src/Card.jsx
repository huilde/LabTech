import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Progress } from "antd";
import { Persons } from "./Persons";

const Card = () => {
  const [goToTrilha, setGoToTrilha] = useState(false);
  return (
    <div onClick={() => setGoToTrilha(true)} className="card">
      <h2 className="subtitle"> Logica de programação</h2>

      <h2 className="time"> 10 HORAS</h2>
      <Persons />
      <p className="descriptions">
        Aprenda o básico e comece a estudar programação.
      </p>
      <Progress percent={40} showInfo={false} strokeColor="#27C36F" />
      {goToTrilha && <Navigate to="/trilha"></Navigate>}
    </div>
  );
};

export { Card };
