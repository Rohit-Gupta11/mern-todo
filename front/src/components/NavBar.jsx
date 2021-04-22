import React from "react";
import "./main.css";
import {
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <>
        <nav className="navbar mg-bt">
            <div className="container nav-con">
            <div className="logo-container">
            <Link to="/" className="logo">WhatTodo!</Link>
            </div>
            <div className="nav-btn-container">
            <Link to="/todo" className="nav-btn">Let's do</Link>
            </div>
            </div>
        </nav>
        </>
    );
};

export default NavBar;