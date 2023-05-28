import { Row, Col } from "antd";

const CardTrilha = (props) => {
  const { svg, content, type } = props;
  return (
    <div
      className="cardTrilha"
      style={{
        marginTop: type === "conteúdo" || type === "portfólio" ? "24px" : "8px",
        flexDirection: content === "Certificação" ? "column" : "row",
        alignItems: content === "Certificação" ? "center" : "start",
      }}
    >
      <Row justify="start" flex={10}>
        {svg}
      </Row>
      <Row justify="start" flex={16}>
        <div className={content !== "Certificação" ? "divTrilha" : ""}>
          <div className="type"> {type}</div>
          <div className="trilhaContent"> {content}</div>
        </div>
      </Row>
    </div>
  );
};

export { CardTrilha };
