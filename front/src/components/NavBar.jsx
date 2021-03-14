import React from "react";
import "./NavBar.css";

const NavBar = () => {
    return(
        <>
        <nav className="navbar">
            <h1 className="logo">WhatTodo!</h1>
            <div className="nav-btn-container">
            <button className="nav-btn">Let's do</button>
            </div>
        </nav>
        </>
    );
}

export default NavBar;