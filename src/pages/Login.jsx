import React, { useEffect, useState, useContext } from "react";
import { Row, Form, Input, Button, Space, Col } from "antd";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

// import { db } from "../firebase";
import { Person } from "../Person";
import { Navigate } from "react-router-dom";
import { Context } from "../Context";

const Login = () => {
  const [form] = Form.useForm();
  const [isLogged, setIsLogged] = useState(true);
  const nameValue = Form.useWatch("senha", form);
  const [profile, setProfile] = useContext(Context);
  console.log(form);
  //   const [profile, setProfile] = useState([]);
  const clientId =
    "5420198135-r829nc9lp5l9mt1s3gr5da3sc8h847v4.apps.googleusercontent.com";

  console.log(profile);

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
    console.log(profile);
    setIsLogged(false);
  };

  const onFailure = (err) => {
    console.log("failed", err);
  };

  return (
    <>
      {isLogged ? (
        <div className="" style={{ padding: "2rem" }}>
          <Person />
          <Row justify="middle" align="middle">
            <Col justify="center" align="middle">
              <h1 className="base-font">
                Aprenda praticando
                <span style={{ color: "#27C36F", margin: 0 }}>|</span>
              </h1>
              <p className="base-font">
                Preencha os dados abaixo para continuar.
              </p>

              <div>
                <Form
                  onFinish={() => setIsLogged(false)}
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
                    name="Senha"
                    label="Senha"
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
                        htmlType="submit"
                        className="button"
                        type="primary"
                        shape="round"
                        size="large"
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
                isSignedIn={false}
              />
            </Col>
          </Row>
        </div>
      ) : (
        <Navigate to="/inicio"></Navigate>
      )}
    </>
  );
};

export default Login;
