import { Progress } from "antd";
import { Persons } from "./Persons";

const Card = () => {
  return (
    <div className="card">
      <a href="/trilha">
        <h2 className="subtitle"> Logica de programação</h2>

        <h2 className="time"> 10 horas</h2>
        <Persons />
        <p className="description">
          Aprenda o básico e comece a estudar programação.
        </p>
        <Progress percent={40} showInfo={false} strokeColor="#27C36F" />
      </a>
    </div>
  );
};

export { Card };
