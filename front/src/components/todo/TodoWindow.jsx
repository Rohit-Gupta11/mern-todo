import React from "react";
import TodoIn from "./TodoIn";
import TodoList from "./TodoList";
import TodoEdit from "./TodoEdit";
import {
    Link,BrowserRouter as Router,
    Switch, Route
} from "react-router-dom";

const TodoWindow = () => {
    return(
        <>
        <Router>
        <Link to="/todo/todo-list">Todo List</Link>
        <Link to="/todo/todo-in">Create Todo</Link>
        <Link to="/todo/todo-edit">Edit Todo</Link>
        <Link to="/">Home</Link>
        <Switch>
            <Route exact path="/todo/todo-list">
                <TodoList/>
            </Route>
            <Route exact path="/todo/todo-in">
                <TodoIn/>
            </Route>
            <Route exact path="/todo/todo-edit">
                <TodoEdit/>
            </Route>
        </Switch>
        </Router> 
        </>
    );
};

export default TodoWindow;