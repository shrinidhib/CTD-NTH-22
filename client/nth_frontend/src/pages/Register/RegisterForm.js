import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { change_login } from "../../actions/loginAction";

const RegisterForm = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [first_name, setfirst_name] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState();
    const [college, setCollege] = useState("");
    const [error, setError] = useState("");
    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(first_name);
        console.log(typeof phone);
        console.log(college);
        console.log(username);
        console.log(email);
        console.log(password);
        const data = { first_name, phone, college, username, email, password };
        console.log(data);
        fetch("http://localhost:8000/auth/users/", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(response => {
                console.log(response.password);
                if (!response.ok) {
                    console.log(response.data)
                    // setFetchError("Invalid Credentials!!!")
                    throw Error("Could not fetch the data.");
                }
                return response.json()

            })
            .then(data => {
                console.log(data)
                localStorage.setItem("auth-token", data.auth_token)
                localStorage.setItem("username", username)
                props.change_longinStatus();
                navigate("/instructions");
                // navigate("/question/put_your_ans_here");
                
            })
            .catch(err => {
                console.log(err);
                setError("Invalid Credentials");
            })
    };
    return (
        <div className="register-page">

            <form onSubmit={handleSubmit}>
                <div >
                    {/* <div> */}
                        <div className="nes-container is-dark with-title " style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} >
                            <span class="title">Register</span>
                            
                            <div class="nes-field ">
                                <label for="name_field" class="col">Name</label>
                                <input id="first_name"
                                    name="first_name"
                                    value={first_name}
                                    onChange={e => setfirst_name(e.target.value)}
                                    type="text"
                                    placeholder="type your full name"
                                    className="login-form-input"
                                    required
                                />
                            </div>

                            <div class="nes-field">
                                <label for="name_field" class="col">Phone</label>
                                {/* <input type="number" id="name_field" class="nes-input" placeholder="Type your phone number"/> */}
                                <input id="phone"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(parseInt(e.target.value))}
                                    type="number"
                                    placeholder="type your phone number"
                                    className="login-form-input"
                                    required
                                />
                            </div>

                            <div class="nes-field">
                                <label for="name_field" class="col">College</label>
                                {/* <input type="text" id="name_field" class="nes-input" placeholder="Type your college"/> */}
                                <input id="college"
                                    name="college"
                                    value={college}
                                    onChange={(e) => setCollege(e.target.value)}
                                    type="text"
                                    placeholder="type your college"
                                    className="login-form-input"
                                    required
                                />
                            </div>

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
                                    required
                                />
                            </div>

                            <div class="nes-field ">
                                <label for="name_field" class="col">Email</label>
                                <input id="email"
                                    name="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="type your email"
                                    className="login-form-input"
                                    required
                                />
                            </div>

                            <div class="nes-field ">
                                <label for="name_field" class="col">Password</label>
                                <input id="password"
                                    name="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="type your password" 
                                    className="login-form-input"
                                    // minLength={8}
                                    required
                                />
                            </div>

                            
                            <div className="login-button">
                        <button type="submit">
                            Register
                        </button>

                    </div>
                        </div>
                    {/* </div> */}

                    
                    <p className='register'>
                        {
                            error === "" ? <></> : <p className='err'>{error}</p>
                        }
                        Or Login using
                        <br />
                        <Link to='/login'>Login</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps =(state)=>{
    return {
        loginStatus:state.loginStatus
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        change_longinStatus: ()=>{ dispatch(change_login()) }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(RegisterForm);
