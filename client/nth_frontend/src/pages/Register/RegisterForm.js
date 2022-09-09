import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [college, setCollege] = useState("");
    const [error, setError] = useState("");
    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username);
        console.log(password);
        const data = { username, password };
        fetch("http://localhost:8000/auth/token/login/", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    console.log(response)
                    // setFetchError("Invalid Credentials!!!")
                    throw Error("Could not fetch the data.");
                }
                return response.json()

            })
            .then(data => {
                console.log(data)
                localStorage.setItem("auth-token", data.auth_token)
                localStorage.setItem("username", username)
                navigate("/instructions");
                // navigate("/question/put_your_ans_here");
            })
            .catch(err => {
                console.log(err);
                setError("Invalid Credentials");
            })
    };
    return (
        <div className="login-page">

            <form onSubmit={handleSubmit}>
                <div >
                    {/* <div> */}
                        <div className="nes-container is-dark with-title " style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} >
                            <span class="title">Register</span>
                            <div class="nes-field">
                                <label for="name_field" class="col">Username</label>
                                {/* <input type="text" id="name_field" class="nes-input" placeholder="Type your username"/> */}
                                <input id="username"
                                    name="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="text"
                                    placeholder="type your username"
                                    className="login-form-input"
                                />
                            </div>
                            <div class="nes-field ">
                                <label for="name_field" class="col">Password</label>
                                <input id="password"
                                    name="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="type your password" />
                            </div>
                            <div class="nes-field ">
                                <label for="name_field" class="col">Name</label>
                                <input id="fullname"
                                    name="fullname"
                                    value={fullname}
                                    onChange={e => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="type your password" />
                            </div>
                            <div className="login-button">
                        <button type="submit">
                            Login
                        </button>

                    </div>
                        </div>
                    {/* </div> */}

                    
                    <p className='register'>
                        {
                            error === "" ? <></> : <p className='err'>{error}</p>
                        }
                        Or Register using
                        <br />
                        <Link to='/register'>Register</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
