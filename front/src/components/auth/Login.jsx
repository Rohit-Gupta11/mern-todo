import React from "react";
import "./auth.css";

const Login = () => {
    return (
        <div className="container auth">
            <h1 className="heading">Login</h1>
            <div className="sub-details-con">
                <label htmlFor="username">Username</label>
                <input type="text" />
            </div>
            <div className="sub-details-con">
                <label htmlFor="password">Password</label>
                <input type="text" />
            </div>
            <div className="btn-con">
                <div className="auth-btn mg-bt">Login</div>
            </div>
        </div>
    );
};

export default Login;