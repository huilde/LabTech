import React, { useEffect, useState } from "react";
import { Row, Form, Input, Button, Space, Col } from "antd";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

// import { db } from "../firebase";
import { Person } from "../Person";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [form] = Form.useForm();
  const [isLogged, setIsLogged] = useState(true);
  const nameValue = Form.useWatch("nome", form);
  const [profile, setProfile] = useState([]);
  const clientId =
    "5420198135-r829nc9lp5l9mt1s3gr5da3sc8h847v4.apps.googleusercontent.com";

  useEffect(() => {}, []);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    setProfile(res.profileObj);
  };

  const onFailure = (err) => {
    console.log("failed", err);
  };

  const logOut = () => {
    setProfile(null);
  };
  return (
    <>
      {isLogged ? (
        <>
          <Person />
          <Row justify="middle" align="middle">
            <Col justify="center" align="middle">
              <h1 className="base-font">Aprenda praticando</h1>
              <p className="base-font">
                Preencha os dados abaixo para continuar.
              </p>

              <div>
                <Form
                  hideRequiredMark
                  form={form}
                  name="validateOnly"
                  layout="vertical"
                  autoComplete="off"
                >
                  <Form.Item
                    name="E-mail"
                    label="E-mail"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="Nome"
                    label="Nome"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item>
                    <Space>
                      <Button
                        className="button"
                        type="primary"
                        shape="round"
                        size="large"
                        onClick={() => setIsLogged(false)}
                      >
                        Entrar
                      </Button>
                    </Space>
                  </Form.Item>
                </Form>
              </div>

              <GoogleLogin
                className="loginButton"
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
            </Col>
          </Row>
        </>
      ) : (
        <Navigate to="/inicio"></Navigate>
      )}
    </>
  );
};

export default Login;
