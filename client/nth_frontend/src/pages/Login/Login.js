// import { Col, Row, Container } from "react-bootstrap";
import "./Login.css";
import LoginForm from "./LoginForm";
import React from "react";
const Login = () => {
    return (
        <div>
            {/* <Container fluid>
                <Row>
                    <Col lg={6} sm={12}>
                        <LoginForm></LoginForm>
                    </Col>
                    <Col lg={6} sm={12}>
                        <Instructions></Instructions>
                    </Col>
                </Row>
            </Container> */}
            <LoginForm></LoginForm>
        </div>
    );
};

export default Login;
