import React from "react";
import "./auth.css";
import { useState } from "react";

const Login = () => {
    const api_key = "http://localhost:4000/user/login";

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function registerUser() {

    }

    return (
        <div className="container auth">
            <h1 className="heading">Login</h1>
            <div className="sub-details-con">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" onChange={(e) => {
                        setUsername(e.target.value);
                    }
                } />
            </div>
            <div className="sub-details-con">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
            </div>
            <div className="btn-con">
                <input onClick={registerUser()} className="auth-btn mg-bt" placeholder="Login" />
            </div>
        </div>
    );
};

export default Login;