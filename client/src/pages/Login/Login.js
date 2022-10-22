import "./Login.css";
import LoginForm from "./LoginForm";
import React from "react";
const Login = (props) => {
    return (
        <div>
            <LoginForm {...props} />
        </div>
    );
};

export default Login;
