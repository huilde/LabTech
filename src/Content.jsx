import { Col, Row } from "antd";
import React from "react";
const Content = (props) => {
  const { svg, title, description } = props;
  return (
    <Col justify="center" className="content">
      <Col>
        <span className="principalContent fontNormal">{title}</span>
        <p className="description">{description}</p>
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
