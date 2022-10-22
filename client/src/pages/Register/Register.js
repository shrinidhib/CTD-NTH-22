import "./Register.css";
import React from "react";
import RegisterForm from "./RegisterForm";
const Register = (props) => {
    return (
        <div>
            <RegisterForm {...props}></RegisterForm>
        </div>
    );
};

export default Register;
