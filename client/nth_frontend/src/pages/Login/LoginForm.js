import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import React from "react";
const LoginForm = () => {
    // const [username,setUsername]=useState("");
    // const [password,setPassword]=useState("");
    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
        console.log(event.target.username.value);
        console.log(event.target.password.value);
        // fetch("http://localhost:8000/auth/token/login/")
        fetch("http://localhost:8000/auth/token/login/",{ 
        method: "POST",
        body: JSON.stringify({
            username: event.target.username.value,
            password: event.target.password.value
          })
        })
        .then(response => {
            console.log(response);
            return response.json()
            
        })
        .then(data => {
            console.log(data)
        })
    };
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div className="login-page">
                <h2>Login</h2>
                <div className='field'>
                    <label>Username</label>
                    <br />
                    <input
                        id="username"
                        name="username"
                        className="login-form-input"
                        // onChange={handleChange}
                        type="text"
                        placeholder="type your username"
                    />
                </div>
                <div className="field">
                    <label>Password</label>
                    <br />
                    <input
                        id="password"
                        name="password"
                        className="login-form-input"
                        // onChange={handleChange}
                        type="password"
                        placeholder="type your password"
                    />
                </div>

                <div className="login-button">
                    {/* <Link to="/question"> */}
                        <button
                            // onClick={handleSubmit}
                            type="submit">
                            Login
                        </button>
                    {/* </Link> */}
                </div>
                <p className='register'>Or Register using
                    <br />
                    <Link to='/register'>Register</Link>
                </p>
            </div>
            </form>
        </div>
    );
};

export default LoginForm;
