import React, { useState, useContext } from "react";
import { Avatar, Row, Col } from "antd";
import { Card } from "../Card";
import { Navigate } from "react-router-dom";
import { Context } from "../Context";

const Inicio = () => {
  const [profile] = useContext(Context);
  console.log(profile);
  const [goToPerfil, setGoToPerfil] = useState(false);
  const [goToLogin, setGoToLogin] = useState(false);
  return (
    <>
      <svg
        className="logout"
        onClick={() => setGoToLogin(true)}
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.16666 3.83333L6.99999 5L9.16666 7.16667H0.666656V8.83333H9.16666L6.99999 11L8.16666 12.1667L12.3333 8L8.16666 3.83333ZM15.6667 13.8333H8.99999V15.5H15.6667C16.5833 15.5 17.3333 14.75 17.3333 13.8333V2.16667C17.3333 1.25 16.5833 0.5 15.6667 0.5H8.99999V2.16667H15.6667V13.8333Z"
          fill="white"
        />
      </svg>
      <Row justify="center" align="middle">
        <Col className="paddingLeft" justify="center" align="middle">
          <h1 className="base-font userNome">
            Olá {profile.name ?? "José Silva"}!
          </h1>
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
                {profile.name ?? "JS"}
              </Avatar>
              <span onClick={() => setGoToPerfil(true)} className="blue">
                Ver perfil
              </span>
            </Col>
            <Card />
            <Card />
            {goToPerfil && <Navigate to="/perfil"></Navigate>}
            {goToLogin && <Navigate to="/"></Navigate>}
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Inicio;
