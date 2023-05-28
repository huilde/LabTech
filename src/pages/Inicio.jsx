import React, { useState, useContext } from "react";
import { Avatar, Row, Col } from "antd";
import { Card } from "../Card";
import { Navigate } from "react-router-dom";
import { Context } from "../Context";

const Inicio = () => {
  const [profile] = useContext(Context);
  console.log(profile);
  const [goToPerfil, setGoToPerfil] = useState(false);
  return (
    <Row justify="center" align="middle">
      <Col justify="center" align="middle">
        <h1 className="base-font userNome">Olá {profile.name}!</h1>
        <Col align="start">
          <Col className="sub">
            <Avatar
              onClick={() => setGoToPerfil(true)}
              src={profile.imageUrl}
              style={{
                verticalAlign: "middle",
                marginRight: "10px",
                border: "2px solid #383353",
              }}
              size="large"
              gap={4}
            >
              {profile.name}
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
