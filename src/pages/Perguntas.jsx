import React, { useState } from "react";

import { Col, Progress, Button, Radio, notification } from "antd";
import { Navigate } from "react-router-dom";

const Perguntas = () => {
  const [goToTrilha, setGoToTrilha] = useState(false);
  const [isASelected, setIsASelected] = useState(false);
  const [isBSelected, setIsBSelected] = useState(false);

  const openNotificationCerto = () => {
    notification.open({
      className: "success",
      description: "A sua resposta está correta , você está mandando bem",
    });
  };

  const openNotificationErrado = () => {
    notification.open({
      message: "Resposta incorreta",
      className: "error",
      description: "Não foi dessa vez, revise o conteúdo e tente novamente",
    });
  };

  const handleSubmit = () => {
    if (isASelected) {
      openNotificationCerto();
      setTimeout(() => setGoToTrilha(true), 3000);
    }
    if (isBSelected) {
      openNotificationErrado();
    }
  };

  return (
    <Col align="top" justify="top" className="tela padding">
      <Col className="subHeader">
        <span className="principalContent">
          Aplicação de algoritmos em problemas reais
        </span>
        <Progress percent={40} showInfo={false} strokeColor="#27C36F" />
      </Col>
      <Col>
        <p className="principalContent" style={{ fontSize: "20px" }}>
          Qual é a saída deste código?
        </p>
      </Col>
      <div className="codeText">
        x = 3 <br /> y = 3 <br />
        <br />
        if x == y: <br />
        {"    "} print (“x e y são iguais”)
        <br /> else: <br /> print(“x e y são diferentes”)
      </div>
      <div style={{ height: "84px" }}></div>
      <Radio.Group>
        <Radio.Button
          className={isASelected ? "quizz" : ""}
          onClick={() => [setIsASelected(true), setIsBSelected(false)]}
          style={{
            background: "#1A1433",
            width: "100%",
            height: "61px",
            textAlign: "center",
            textJustify: "center",
            color: "#FFFFFFB2",
            border: "none",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "16px",
          }}
          value="a"
        >
          x e y são iguais
        </Radio.Button>
        <Radio.Button
          value="b"
          onClick={() => [setIsBSelected(true), setIsASelected(false)]}
          className={isBSelected ? "quizz" : ""}
          style={{
            background: "#1A1433",
            width: "100%",
            height: "61px",
            textAlign: "center",
            textJustify: "center",
            color: "#FFFFFFB2",
            border: "none",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "16px",
          }}
        >
          x e y são diferentes
        </Radio.Button>
      </Radio.Group>
      <div style={{ height: "84px" }}></div>
      <Button
        htmlType="submit"
        className="button fixed"
        type="primary"
        shape="round"
        size="large"
        onClick={() => handleSubmit()}
      >
        Verificar
      </Button>
      {goToTrilha && <Navigate to="/projeto"></Navigate>}
    </Col>
  );
};
export default Perguntas;
