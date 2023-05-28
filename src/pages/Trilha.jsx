import React from "react";
import { Row, Col, Progress } from "antd";
import { CardTrilha } from "../CardTrilha";
import { Lock } from "../Lock";
import { Navigate } from "react-router-dom";
const Trilha = () => {
  const handleClick = () => {
    return <Navigate to="/atividades"></Navigate>;
  };

  return (
    <Col align="top" justify="top" className="tela">
      <Row>
        <Col className="trilhaHeader">
          <a href="/inicio">
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 13.5L1 7.5L7 1.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <span className="principalContent">
            Trilha 1: Lógica de programação básica
          </span>
        </Col>
      </Row>
      <Row>
        <Col className="subHeader">
          <span className="principalContent">
            Parte 1: aprendendo algoritmo
          </span>
          <Progress percent={40} showInfo={false} strokeColor="#27C36F" />
        </Col>
      </Row>
      <Row>
        <div className="vertical"></div>
        <Col align="center" className="trilha">
          <a href="/atividades">
            <CardTrilha
              svg={
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="56"
                    height="56"
                    rx="28"
                    fill="#3083FF"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M22.012 34H37V20C37 19.4696 36.7893 18.9609 36.4142 18.5858C36.0391 18.2107 35.5304 18 35 18H22C20.794 18 19 18.799 19 21V35C19 37.201 20.794 38 22 38H37V36H22.012C21.55 35.988 21 35.805 21 35C21 34.195 21.55 34.012 22.012 34ZM24 22H33V24H24V22Z"
                    fill="#00A3FF"
                  />
                </svg>
              }
              type="conteúdo"
              content="Conceitos básicos de algoritmos"
            ></CardTrilha>
          </a>
          <CardTrilha
            svg={
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="30"
                  height="30"
                  rx="15"
                  fill="#172E66"
                />
                <path
                  d="M8.5 16L13.5 21L23.5 11"
                  stroke="#367CFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="1"
                  y="1"
                  width="30"
                  height="30"
                  rx="15"
                  stroke="#367CFF"
                  strokeWidth="2"
                />
              </svg>
            }
            content="Atividades - Parte 1"
          ></CardTrilha>
          <CardTrilha
            svg={
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="30"
                  height="30"
                  rx="15"
                  fill="#172E66"
                />
                <path
                  d="M8.5 16L13.5 21L23.5 11"
                  stroke="#367CFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="1"
                  y="1"
                  width="30"
                  height="30"
                  rx="15"
                  stroke="#367CFF"
                  strokeWidth="2"
                />
              </svg>
            }
            content="Atividades - Parte 2"
          ></CardTrilha>
          <CardTrilha
            svg={
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="56" height="56" rx="28" fill="#383353" />
                <path
                  d="M22.012 34H37V20C37 19.4696 36.7893 18.9609 36.4142 18.5858C36.0391 18.2107 35.5304 18 35 18H22C20.794 18 19 18.799 19 21V35C19 37.201 20.794 38 22 38H37V36H22.012C21.55 35.988 21 35.805 21 35C21 34.195 21.55 34.012 22.012 34ZM24 22H33V24H24V22Z"
                  fill="#908F96"
                />
              </svg>
            }
            type="conteúdo"
            content="Dados, variáveis e constantes"
          ></CardTrilha>

          <CardTrilha
            svg={
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="30"
                  height="30"
                  rx="15"
                  fill="#221C3E"
                />
                <rect
                  x="1"
                  y="1"
                  width="30"
                  height="30"
                  rx="15"
                  stroke="#383353"
                  strokeWidth="2"
                />
              </svg>
            }
            content="Atividades"
          ></CardTrilha>
          <CardTrilha
            svg={
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="56" height="56" rx="28" fill="#383353" />
                <path
                  d="M22.012 34H37V20C37 19.4696 36.7893 18.9609 36.4142 18.5858C36.0391 18.2107 35.5304 18 35 18H22C20.794 18 19 18.799 19 21V35C19 37.201 20.794 38 22 38H37V36H22.012C21.55 35.988 21 35.805 21 35C21 34.195 21.55 34.012 22.012 34ZM24 22H33V24H24V22Z"
                  fill="#908F96"
                />
              </svg>
            }
            type="conteúdo"
            content="Dados, variáveis e constantes"
          ></CardTrilha>
          <CardTrilha
            svg={
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="30"
                  height="30"
                  rx="15"
                  fill="#221C3E"
                />
                <rect
                  x="1"
                  y="1"
                  width="30"
                  height="30"
                  rx="15"
                  stroke="#383353"
                  strokeWidth="2"
                />
              </svg>
            }
            type="Atividades básicas"
            content="Estruturas de controle: condicionais e loops"
          ></CardTrilha>
          <CardTrilha
            svg={
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="56" height="56" rx="28" fill="#383353" />
                <g clipPath="url(#clip0_86_5351)">
                  <path
                    d="M37.75 22V20.5C37.75 20.1022 37.592 19.7206 37.3107 19.4393C37.0294 19.158 36.6478 19 36.25 19H19.75C19.3522 19 18.9706 19.158 18.6893 19.4393C18.408 19.7206 18.25 20.1022 18.25 20.5V22C18.25 22.3978 18.408 22.7794 18.6893 23.0607C18.9706 23.342 19.3522 23.5 19.75 23.5V32.5H19C18.8011 32.5 18.6103 32.579 18.4697 32.7197C18.329 32.8603 18.25 33.0511 18.25 33.25C18.25 33.4489 18.329 33.6397 18.4697 33.7803C18.6103 33.921 18.8011 34 19 34H27.25V35.6294C26.7496 35.8063 26.3278 36.1544 26.0593 36.6122C25.7907 37.07 25.6926 37.6081 25.7824 38.1312C25.8722 38.6543 26.144 39.1288 26.5498 39.471C26.9556 39.8131 27.4692 40.0007 28 40.0007C28.5308 40.0007 29.0444 39.8131 29.4502 39.471C29.856 39.1288 30.1278 38.6543 30.2176 38.1312C30.3073 37.6081 30.2093 37.07 29.9407 36.6122C29.6722 36.1544 29.2504 35.8063 28.75 35.6294V34H37C37.1989 34 37.3897 33.921 37.5303 33.7803C37.671 33.6397 37.75 33.4489 37.75 33.25C37.75 33.0511 37.671 32.8603 37.5303 32.7197C37.3897 32.579 37.1989 32.5 37 32.5H36.25V23.5C36.6478 23.5 37.0294 23.342 37.3107 23.0607C37.592 22.7794 37.75 22.3978 37.75 22ZM28 38.5C27.8517 38.5 27.7067 38.456 27.5833 38.3736C27.46 38.2912 27.3639 38.1741 27.3071 38.037C27.2503 37.9 27.2355 37.7492 27.2644 37.6037C27.2934 37.4582 27.3648 37.3246 27.4697 37.2197C27.5746 37.1148 27.7082 37.0433 27.8537 37.0144C27.9992 36.9855 28.15 37.0003 28.287 37.0571C28.4241 37.1139 28.5412 37.21 28.6236 37.3333C28.706 37.4567 28.75 37.6017 28.75 37.75C28.75 37.9489 28.671 38.1397 28.5303 38.2803C28.3897 38.421 28.1989 38.5 28 38.5ZM19.75 20.5H36.25V22H19.75V20.5Z"
                    fill="#908F96"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_86_5351">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(16 16)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
            type="portfólio"
            content="Aplicação de lógica de programação para portfólio"
          ></CardTrilha>
        </Col>
        <Lock text="Parte 2:  Estruturas de dados"></Lock>
        <Lock text="Parte 3: Modularização e funções"></Lock>
        <Lock text="Resolução de problemas e algoritmos"></Lock>
        <Col style={{ margin: "32px 24px" }}>
          <CardTrilha
            svg={
              <svg
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="56" height="56" rx="28" fill="#383353" />
                <g clipPath="url(#clip0_86_5370)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.086 18.1C27.44 17.7465 27.9136 17.5385 28.4134 17.517C28.9132 17.4955 29.403 17.6621 29.786 17.984L29.914 18.101L31.814 20H34.5C35.0044 20.0001 35.4901 20.1908 35.8599 20.5338C36.2297 20.8769 36.4561 21.347 36.494 21.85L36.5 22V24.686L38.4 26.586C38.7538 26.94 38.962 27.4139 38.9834 27.9139C39.0049 28.414 38.8381 28.9039 38.516 29.287L38.399 29.414L36.499 31.314V34C36.4991 34.5046 36.3086 34.9906 35.9655 35.3605C35.6224 35.7305 35.1521 35.9572 34.649 35.995L34.5 36H31.815L29.915 37.9C29.5609 38.2538 29.0871 38.462 28.587 38.4835C28.087 38.505 27.597 38.3382 27.214 38.016L27.087 37.9L25.187 36H22.5C21.9954 36.0002 21.5094 35.8096 21.1394 35.4665C20.7694 35.1234 20.5428 34.6532 20.505 34.15L20.5 34V31.314L18.6 29.414C18.2462 29.06 18.038 28.5861 18.0165 28.0861C17.995 27.586 18.1618 27.0961 18.484 26.713L18.6 26.586L20.5 24.686V22C20.5001 21.4956 20.6907 21.0099 21.0338 20.6401C21.3769 20.2703 21.847 20.0438 22.35 20.006L22.5 20H25.186L27.086 18.1ZM31.579 24.983L27.335 29.227L25.567 27.459C25.3793 27.2715 25.1249 27.1662 24.8596 27.1663C24.5943 27.1664 24.34 27.2719 24.1525 27.4595C23.965 27.6471 23.8597 27.9016 23.8598 28.1669C23.8599 28.4321 23.9653 28.6865 24.153 28.874L26.557 31.278C26.6591 31.3802 26.7804 31.4613 26.9139 31.5166C27.0474 31.5719 27.1905 31.6004 27.335 31.6004C27.4795 31.6004 27.6226 31.5719 27.756 31.5166C27.8895 31.4613 28.0108 31.3802 28.113 31.278L32.993 26.397C33.1751 26.2084 33.2759 25.9558 33.2736 25.6936C33.2714 25.4314 33.1662 25.1806 32.9808 24.9952C32.7954 24.8098 32.5446 24.7046 32.2824 24.7023C32.0202 24.7 31.7676 24.8008 31.579 24.983Z"
                    fill="#908F96"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_86_5370">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(16.5 16)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
            content="Certificação"
          ></CardTrilha>
        </Col>
      </Row>
    </Col>
  );
};

export default Trilha;
