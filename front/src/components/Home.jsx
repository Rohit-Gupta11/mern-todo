import React from "react";
import {Link} from "react-router-dom";
import "./Home.css";

const Home = () => {
    return(
        <div>
        <div className="home container">
            <div className="kids"></div>
            <div className="hero-text">
                <p className="p1">Making a todo-list is always a <br/>great idea.</p>
                <p className="p2">Don’t waste time anymore!<br/>Make your todo-list here</p>
            </div>
        </div>
        <div className="hero-btn-container">
        <Link to="/todo" className="hero-btn-home">Let's do</Link>
        </div>
        </div>
    );
};

export default Home;