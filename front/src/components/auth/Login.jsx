import React from "react";
import "./auth.css";

const Login = () => {
    return (
        <form method="POST" action="" className="container auth">
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
                <input type="submit" className="auth-btn mg-bt" placeholder="Login" />
            </div>
        </form>
    );
};

export default Login;