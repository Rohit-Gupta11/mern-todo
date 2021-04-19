import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const Register = () => {
    return (
        <form method="POST" action="/" className="container auth">
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
                <input type="submit" className="auth-btn" placeholder="Register"/>
                <p>or<Link to="/login"> Login</Link></p>
            </div>
        </form>
    );
};

export default Register;