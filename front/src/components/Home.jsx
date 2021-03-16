import React from "react";
import {Link} from "react-router-dom";
import "./Home.css";

const Home = () => {
    return(
        <div className="home container-main">
            <div className="hero-home">
                <p>What are you doing man? </p>
                <p>Get your task done as soon as possible !</p>
            </div>
            <Link to="/todo" className="hero-btn-home">Let's do</Link>
        </div>
    );
};

export default Home;