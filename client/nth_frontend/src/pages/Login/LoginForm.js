import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import React from "react";
const LoginForm = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username);
        console.log(password);
        const data={username,password};
        fetch("http://localhost:8000/auth/token/login/",{ 
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)
        })
        .then(response => {
            console.log(response);
            if(!response.ok){
                console.log(response)
                // setFetchError("Invalid Credentials!!!")
                throw Error("Could not fetch the data.");
            }
            return response.json()
            
        })
        .then(data => {
            console.log(data)
            // localStorage.setItem("auth-token",data.auth_token)
            // localStorage.setItem("username",username)
            // navigate("/");
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
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
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
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        type="password"
                        placeholder="type your password"
                    />
                </div>

                <div className="login-button">
                    <button type="submit">
                        Login
                    </button>
                    
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
