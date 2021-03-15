import React from "react";
import "./NavBar.css";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <>
        <Router>
        <nav className="navbar">
            <Link to="/" className="logo">WhatTodo!</Link>
            <div className="nav-btn-container">
            <Link to="/todo" className="nav-btn">Let's do</Link>
            </div>
        </nav>
        </Router>
        </>
    );
};

export default NavBar;