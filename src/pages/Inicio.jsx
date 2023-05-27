import React from "react";
import { Avatar, Row, Col } from "antd";
import { Card } from "../Card";

const Inicio = () => {
  return (
    <Row justify="center" align="middle">
      <Col justify="center" align="middle">
        <h1 className="base-font userNome">Olá /nome do usuário/!</h1>
        <Col align="start">
          <Col className="sub">
            <a className="blue" href="/perfil">
              <Avatar
                style={{
                  verticalAlign: "middle",
                  marginRight: "10px",
                }}
                size="large"
                gap={4}
              >
                {"Lucy"}
              </Avatar>
            </a>
            <a className="blue" href="/perfil">
              Ver perfil
            </a>
          </Col>
          <Card />
        </Col>
      </Col>
    </Row>
  );
};

export default Inicio;
