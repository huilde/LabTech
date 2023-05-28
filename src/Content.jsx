import { Col, Row } from "antd";
import React from "react";
const Content = (props) => {
  const { svg, title, description } = props;
  return (
    <Col justify="center" className="content">
      <Col className="tamanho">
        <div className="principalContent contenFont fontNormal">{title}</div>
        <div className="description">{description}</div>
      </Col>
      <Col flex="auto"></Col>
      {svg && (
        <Col justify="center" align="middle" className="test">
          {svg}
        </Col>
      )}
    </Col>
  );
};

export { Content };
