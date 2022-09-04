import "./Register.css";
import { Col, Row, Container } from "react-bootstrap";
import Vectorsvg from '../../assets/lock.svg'
import RegisterForm from "./RegisterForm";
import React from "react";
const Register = () => {
    return (
        <div className="register">
            <img src={Vectorsvg}></img>
            <Container fluid>
                <Row>
                    <Col lg={5}>
                        {/* <img src={Vectorsvg} width='370px' /> */}
                    </Col>
                    <Col lg={7} sm={12}>
                        <RegisterForm />
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default Register;