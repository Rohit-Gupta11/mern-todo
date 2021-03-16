import React from "react";
import "./NavBar.css";
import {
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <>
        <nav className="navbar">
            <Link to="/" className="logo">WhatTodo!</Link>
            <div className="nav-btn-container">
            <Link to="/todo" className="nav-btn">Let's do</Link>
            </div>
        </nav>
        </>
    );
};

export default NavBar;