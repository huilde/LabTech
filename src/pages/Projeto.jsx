import React, { useState } from "react";
import { Col, Progress, Row, Button } from "antd";
import { Navigate } from "react-router-dom";

const Projeto = () => {
  const [goToTrilha, setGoToTrilha] = useState(false);
  return (
    <Col align="top" justify="top" className="tela padding">
      <Col className="subHeader">
        <span className="principalContent">
          Aplicação de lógica de programação para portfólio
        </span>
        <Progress percent={80} showInfo={false} strokeColor="#27C36F" />
      </Col>
      <Row>
        <Col>
          <span className="principalContent" style={{ fontSize: "16px" }}>
            Desenvolva um programa que calcule a média aritmética de três notas
            e exiba o resultado na tela.
          </span>
        </Col>
        <Col align="middle">
          <input
            style={{
              height: "363px",
              width: "80%",
              verticalAlign: "top",
              textAlign: "left",
              textJustify: "top",
            }}
            className="codeText"
            type="text"
            name="code"
            id="1"
          />
        </Col>
        <div style={{ height: "500px" }}></div>
      </Row>
      <Button
        htmlType="submit"
        className="button fixed"
        type="primary"
        shape="round"
        size="large"
        onClick={() => setGoToTrilha(true)}
      >
        Concluir
      </Button>

      {goToTrilha && <Navigate to="/trilha"> </Navigate>}
    </Col>
  );
};

export { Projeto };
