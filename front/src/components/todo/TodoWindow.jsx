import React from "react";
import {
    Link
} from "react-router-dom";
import "./todo.css";

const TodoWindow = () => {
    return(
        <>
        <Link to="/todo/create-todo">Create</Link>
        </>
    );
};

export default TodoWindow;