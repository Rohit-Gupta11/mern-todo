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
            <Link className="nav-btn-container" to="/todo">
            <button className="nav-btn">Let's do</button>
            </Link>
        </nav>
        </Router>
        </>
    );
};

export default NavBar;