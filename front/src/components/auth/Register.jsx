import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const Register = () => {
    return (
        <div className="container auth">
            <h1 className="heading">Register</h1>
            <div className="sub-details-con">
                <label htmlFor="username">Username</label>
                <input type="text" />
            </div>
            <div className="sub-details-con">
                <label htmlFor="password">Password</label>
                <input type="text" />
            </div>
            <div className="btn-con">
                <div className="auth-btn">Register</div>
                <p>or<Link to="/login"> Login</Link></p>
            </div>
        </div>
    );
};

export default Register;