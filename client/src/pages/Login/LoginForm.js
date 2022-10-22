import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { change_login } from "../../actions/loginAction";
import Request from "../../api/requests";
import Loader from "../../components/Loader/Loader";
const LoginForm = (props) => {

    // setTimeout(()=>{
    //     props.toast.toast.success("Logged In!")
    // },2000)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loaderStatus, setLoaderStatus] = useState(false);
    console.log(props);
    let navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoaderStatus(true);
        console.log(username);
        console.log(password);

        await Request.login({ username, password })
            .then(data => {
                console.log(data)
                console.log(data.data.auth_token);
                localStorage.setItem("auth-token", data.data.auth_token)
                localStorage.setItem("username", username)
                props.change_longinStatus();
                props.toast.toast.success("Logged In!");
                navigate("/instructions");
                // navigate("/question/put_your_ans_here");
            })
            .catch(err => {
                console.log(err);
                props.toast.toast.error("Invalid Credentials");
                setError("Invalid Credentials");
            })
        setLoaderStatus(false);
    };
    return (

        <div>
            {props.toast.container}
            {
                props.loginStatus === false

                    ?
                    loaderStatus
                        ?
                        <Loader />
                        :
                        <div className="login-page">
                            <form onSubmit={handleSubmit}>
                                <div >
                                    {/* <div> */}
                                    <div className="nes-container is-dark with-title " style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} >
                                        <span class="title">Login</span>
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
                                            <label for="name_field" class="col">Password</label>
                                            <input id="password"
                                                name="password"
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                                type="password"
                                                placeholder="type your password"
                                                required
                                            />
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
                    :

                    <Navigate to={'/instructions'}></Navigate>
            }
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        loginStatus: state.loginStatus
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        change_longinStatus: () => { dispatch(change_login()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
