import React, { useState } from "react";
import { Avatar, Row, Col } from "antd";
import { Card } from "../Card";
import { Navigate } from "react-router-dom";

const Inicio = () => {
  // const handleClick = () => {
  //   return
  // };
  const [goToPerfil, setGoToPerfil] = useState(false);
  const [goToTrilha, setGoToTrilha] = useState(false);
  return (
    <Row justify="center" align="middle">
      <Col justify="center" align="middle">
        <h1 className="base-font userNome">Olá /nome do usuário/!</h1>
        <Col align="start">
          <Col className="sub">
            <Avatar
              onClick={() => setGoToPerfil(true)}
              style={{
                verticalAlign: "middle",
                marginRight: "10px",
                border: "2px solid #383353",
              }}
              size="large"
              gap={4}
            >
              {"Lucy"}
            </Avatar>
            <span onClick={() => setGoToPerfil(true)} className="blue">
              Ver perfil
            </span>
          </Col>
          <Card />
          {goToPerfil && <Navigate to="/perfil"></Navigate>}
        </Col>
      </Col>
    </Row>
  );
};

export default Inicio;
