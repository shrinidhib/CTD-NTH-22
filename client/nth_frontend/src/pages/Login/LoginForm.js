import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import React from "react";
const LoginForm = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    let navigate = useNavigate();
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
            localStorage.setItem("auth-token",data.auth_token)
            localStorage.setItem("username",username)
            navigate("/question/put_your_ans_here");
        })
        .catch(err=>{
            console.log(err);
            setError("Invalid Credentials");
        })
    };
    return (
        <div>
        
        <form onSubmit={handleSubmit}>
            <div className="login-page">
            <div>
            <div className="nes-container is-dark with-title" >
            <span class="title">INPUT</span>
            <div class="nes-field">
                    <label for="name_field" class="col">Username</label>
                    <input type="text" id="name_field" class="nes-input" placeholder="type your username"/>
            </div>
            <div class="nes-field ">
            <label for="error_field">.input.is-error</label>
                <label for="name_field" class="col">Password</label>
                <input type="password" id="name_field" class="nes-input"/>
            </div>
        
            {/* <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
                <label for="dark_field" style="color:#fff;">.input.is-dark</label>
                <input type="text" id="dark_field" class="nes-input is-dark" placeholder="dark.css"/>
            </div> */}
            </div>
        </div>
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
                {
                    error===""?<></>:<p>{error}</p>
                }
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
