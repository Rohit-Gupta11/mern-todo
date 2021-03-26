import React from "react";
import TodoList from "./TodoList";
import {
    Link
} from "react-router-dom";

const TodoWindow = () => {
    return(
        <>
        <TodoList/>
        <Link to="/todo/create-todo">Create</Link>
        </>
    );
};

export default TodoWindow;