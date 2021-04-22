import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const Register = () => {
    const api_key = "http://localhost:4000/user/register";

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function loginUser() {

    }

    return (
        <div className="container auth">
            <h1 className="heading">Register</h1>
            <div className="sub-details-con">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" onChange={(e) => {
                    setUsername(e.target.value);
                }} />
            </div>
            <div className="sub-details-con">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" onChange={(e) => {
                    setPassword(e.target.value);
                }} />
            </div>
            <div className="btn-con">
                <input onClick={loginUser()} className="auth-btn" placeholder="Register"/>
                <p>or<Link to="/login"><span></span>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;