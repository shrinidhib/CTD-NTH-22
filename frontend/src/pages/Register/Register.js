// import { Col, Row, Container } from "react-bootstrap";
import "./Register.css";
import React from "react";
import RegisterForm from "./RegisterForm";
const Register = (props) => {
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
            <RegisterForm {...props}></RegisterForm>
        </div>
    );
};

export default Register;
