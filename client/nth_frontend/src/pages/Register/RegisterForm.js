import React from 'react'
import "./Register.css";

const RegisterForm = () => {
    return (
        <form className="register-page">
            <h4>Register</h4>
            <div className="field">
                <label>Name</label>
                <input
                    id="fullname"
                    name="fullname"
                    className="register-form-input"
                    // onChange={handleChange}
                    type="text"
                    placeholder="Type your name"
                    required
                />

            </div>

            <div className="field">
                <label>Username</label>
                <br />
                <input
                    id="username"
                    name="username"
                    className="register-form-input"
                    // onChange={handleChange}
                    type="username"
                    placeholder="Type your username"
                    required
                />
            </div>

            <div className="field">
                <label>Mobile Number</label>
                <br />
                <input
                    id="mobile_number"
                    name="mobile_number"
                    className="register-form-input"
                    // onChange={handleChange}
                    type="text"
                    placeholder="Type your mobile number"
                    required
                />
            </div>

            <div className="field">
                <label>College</label>
                <br />
                <input
                    id="college"
                    name="college"
                    className="register-form-input"
                    // onChange={handleChange}
                    type="text"
                    placeholder="Type your college name"
                    required
                />
            </div>
            <div className="field">
                <label>Email</label>
                <br />
                <input
                    id="email"
                    name="email"
                    className="register-form-input"
                    // onChange={handleChange}
                    type="email"
                    placeholder="Type your email"
                    required
                />
            </div>
            <div className="field">
                <label>Password</label>
                <br />
                <input
                    id="password"
                    name="password"
                    className="register-form-input"
                    // onChange={handleChange}
                    type="password"
                    placeholder="Type your password"
                    required
                />
            </div>
            <button
                // onClick={handleRegisterSubmit}
                className="register-button" type="submit">
                Register
            </button>
        </form>
    )
}

export default RegisterForm